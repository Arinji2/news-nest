package main

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"

	"github.com/Arinji2/news-backend/cronjobs"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/render"
	"github.com/joho/godotenv"
)

func SkipLoggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/health" {
			next.ServeHTTP(w, r)
			return
		}
		middleware.Logger(next).ServeHTTP(w, r)
	})
}

func main() {
	r := chi.NewRouter()
	r.Use(SkipLoggingMiddleware)

	err := godotenv.Load()
	if err != nil {
		isProduction := os.Getenv("ENVIRONMENT") == "PRODUCTION"
		if !isProduction {
			log.Fatal("Error loading .env file")
		} else {
			fmt.Println("Using Production Environment")
		}
	} else {
		fmt.Println("Using Development Environment")
	}

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("News Backend: Request Received")
		defer w.Write([]byte("News Backend: Request Received"))
		key := r.URL.Query()["key"]
		task := r.URL.Query()["task"]
		if len(key) != 0 {

			if key[0] != os.Getenv("ACCESS_KEY") {
				render.Status(r, 401)
				return

			}

			if task[0] == "live" {
				cronjobs.LiveNewsController()
			}
			if task[0] == "country" {
				cronjobs.CountryNewsController()
			}
			if task[0] == "category" {
				cronjobs.CategoryNewsController()
			}

		}

		render.Status(r, 200)
	})

	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {

		w.Write([]byte("News Backend: Health Check"))
		render.Status(r, 200)
	})

	go startLiveNewsController()
	go startCountryNewsController()
	go startCategoryNewsController()

	http.ListenAndServe(":8080", r)
}

func startLiveNewsController() {
	minutes := time.Duration(rand.Intn(60)) * time.Minute
	hours := 12 * time.Hour
	ticker := time.NewTicker((hours + minutes))
	defer ticker.Stop()

	for range ticker.C {
		fmt.Println("Running Live News Cron Job")
		cronjobs.LiveNewsController()

	}
}

func startCountryNewsController() {
	minutes := time.Duration(rand.Intn(60)) * time.Minute
	hours := 24 * time.Hour
	ticker := time.NewTicker((hours + minutes))
	defer ticker.Stop()

	for range ticker.C {
		fmt.Println("Running Country News Cron Job")
		cronjobs.CountryNewsController()

	}
}

func startCategoryNewsController() {
	minutes := time.Duration(rand.Intn(60)) * time.Minute
	hours := 24 * time.Hour
	ticker := time.NewTicker((hours + minutes))
	defer ticker.Stop()

	for range ticker.C {
		fmt.Println("Running Category News Cron Job")

		cronjobs.CategoryNewsController()

	}
}
