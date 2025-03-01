package cronjobs

import (
	"fmt"
	"log"
	"sync"

	"github.com/Arinji2/news-backend/api"
	"github.com/Arinji2/news-backend/pocketbase"
	"github.com/Arinji2/news-backend/types"
)

func setLiveNews(news []types.NewsItem) int {

	token := pocketbase.PocketbaseAdminLogin()
	client := api.NewApiClient()
	wg := sync.WaitGroup{}

	liveNewsSet := []string{}

	for _, item := range news {
		wg.Add(1)
		go func(item types.NewsItem) {
			defer wg.Done()
			exists := checkIfNewsExists(item, client, "live")
			if exists {
				return
			}

			_, err := client.SendRequestWithBody("POST", "/api/collections/live/records", map[string]string{
				"title":       item.Title,
				"description": item.Description,
				"publishedAt": item.PublishedAt,
				"author":      item.Author,
				"url":         item.URL,
				"urlToImage":  item.URLToImage,
			}, map[string]string{
				"Authorization": token,
			})

			if err != nil {
				log.Fatalf("Error setting live news: %v", err)
			}

			liveNewsSet = append(liveNewsSet, item.Title)
		}(item)

	}

	wg.Wait()

	fmt.Println("Live News Set Successfully, Total Items Set: ", len(liveNewsSet))

	return len(liveNewsSet)

}

func setCountryNews(news map[string][]types.NewsItem) int {

	token := pocketbase.PocketbaseAdminLogin()
	client := api.NewApiClient()
	wg := sync.WaitGroup{}

	countryNewsSet := []string{}

	for countryKey, countryNews := range news {
		wg.Add(1)
		go func(country string, countryNews []types.NewsItem) {
			defer wg.Done()
			for _, item := range countryNews {
				exists := checkIfNewsExists(item, client, "country")
				if exists {
					return
				}

				_, err := client.SendRequestWithBody("POST", "/api/collections/country/records", map[string]string{
					"title":       item.Title,
					"description": item.Description,
					"publishedAt": item.PublishedAt,
					"author":      item.Author,
					"url":         item.URL,
					"urlToImage":  item.URLToImage,
					"country":     country,
				}, map[string]string{
					"Authorization": token,
				})

				if err != nil {
					log.Fatalf("Error setting country news: %v", err)
				}

				countryNewsSet = append(countryNewsSet, item.Title)
			}
		}(countryKey, countryNews)

	}

	wg.Wait()

	fmt.Println("Country News Set Successfully, Total Items Set: ", len(countryNewsSet))

	return len(countryNewsSet)

}

func setCategoryNews(news map[string][]types.NewsItem) int {

	token := pocketbase.PocketbaseAdminLogin()
	client := api.NewApiClient()
	wg := sync.WaitGroup{}

	categoryNewsSet := []string{}

	for categoryKey, categoryNews := range news {
		wg.Add(1)
		go func(category string, categoryNews []types.NewsItem) {
			defer wg.Done()
			for _, item := range categoryNews {
				exists := checkIfNewsExists(item, client, "category")
				if exists {
					return
				}

				_, err := client.SendRequestWithBody("POST", "/api/collections/category/records", map[string]string{
					"title":       item.Title,
					"description": item.Description,
					"publishedAt": item.PublishedAt,
					"author":      item.Author,
					"url":         item.URL,
					"urlToImage":  item.URLToImage,
				}, map[string]string{
					"Authorization": token,
				})

				if err != nil {
					log.Fatalf("Error setting category news: %v", err)
				}

				categoryNewsSet = append(categoryNewsSet, item.Title)
			}
		}(categoryKey, categoryNews)

	}

	wg.Wait()

	fmt.Println("Category News Set Successfully, Total Items Set: ", len(categoryNewsSet))

	return len(categoryNewsSet)

}
