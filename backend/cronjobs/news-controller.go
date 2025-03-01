package cronjobs

import (
	"fmt"
	"log"
	"os"

	"github.com/Arinji2/news-backend/api"
	"github.com/joho/godotenv"
)

func LiveNewsController() {

	fmt.Println("Running Live News Controller")
	defer revalidateFrontend()
	defer fmt.Println("Finished Running Live News Controller")
	news := getAllLiveNews()
	inserted := setLiveNews(news)
	resetLiveNews((float64(inserted)))

}

func CountryNewsController() {

	fmt.Println("Running Country News Controller")
	defer revalidateFrontend()
	defer fmt.Println("Finished Running Country News Controller")
	news := getAllCountryNews()
	inserted := setCountryNews(news)
	resetCountryNews((float64(inserted)))

}

func CategoryNewsController() {

	fmt.Println("Running Category News Controller")
	defer revalidateFrontend()
	defer fmt.Println("Finished Running Category News Controller")
	news := getAllCategoryNews()
	inserted := setCategoryNews(news)
	resetCategoryNews((float64(inserted)))

}

func revalidateFrontend() {
	godotenv.Load()
	fmt.Println("Revalidating Frontend")
	client := api.NewApiClient("https://news.arinji.com")
	_, err := client.SendRequestWithQueryAndIgnoreParsing("GET", "/api/revalidate", map[string]string{
		"key": os.Getenv("REVALIDATE_KEY"),
	}, nil, true)
	if err != nil {
		log.Fatalf("Error revalidating frontend: %v", err)
	}
}
