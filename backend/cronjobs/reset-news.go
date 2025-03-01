package cronjobs

import (
	"fmt"
	"log"
	"math"
	"strconv"
	"sync"

	"github.com/Arinji2/news-backend/api"
	"github.com/Arinji2/news-backend/pocketbase"
)

const totalLiveNewsConst = 100

var totalCategoryNewsConst = len(categories) * 40
var totalCountryNewsConst = len(countries) * 40

func resetLiveNews(inserted float64) {
	fmt.Println("Resetting Live News")
	token := pocketbase.PocketbaseAdminLogin()
	client := api.NewApiClient()
	results, err := client.SendRequestWithQuery("GET", "/api/collections/live/records", map[string]string{
		"page":    "1",
		"perPage": "1",
		"sort":    "-created",
	}, nil)

	if err != nil {
		log.Fatal("Error Getting Total Results for Live News")
	}

	totalResultsFloat, ok := results["totalItems"].(float64)
	totalResults := int(totalResultsFloat)
	if !ok {
		log.Fatal("Error Parsing Total Results")
	}

	if totalResults < totalLiveNewsConst/2 {
		fmt.Println("Less than half of the total results, not purging")
		return
	}

	if totalResults > totalLiveNewsConst {

		numToRemove := strconv.Itoa(int(math.Abs((float64)(totalResults - totalLiveNewsConst))))
		fmt.Printf("Found Extra Results, Purging extra results: %s \n", numToRemove)
		ids := getIdsToDelete(client, numToRemove, "live")

		var wg sync.WaitGroup

		for _, id := range ids {
			wg.Add(1)
			go func(id string) {
				defer wg.Done()
				address := fmt.Sprintf("/api/collections/live/records/%s", id)
				_, err := client.SendRequestWithBody("DELETE", address, nil, map[string]string{
					"Authorization": token,
				})
				if err != nil {
					log.Fatal("Error deleting live news")
				}
			}(id)
		}

		wg.Wait()

		fmt.Println("Extra Results Purged Successfully")
		return

	}

	numberToRemove := strconv.Itoa(int(math.Min(20.0, inserted)))
	fmt.Printf("Under the limit, purging normally. Number to remove: %s \n", numberToRemove)
	ids := getIdsToDelete(client, numberToRemove, "live")

	for _, id := range ids {
		address := fmt.Sprintf("/api/collections/live/records/%s", id)
		_, err := client.SendRequestWithBody("DELETE", address, nil, map[string]string{
			"Authorization": token,
		})
		if err != nil {
			log.Fatal("Error deleting live news")
		}
	}

	fmt.Println("Live News Reset Successfully")

}

func resetCategoryNews(inserted float64) {
	fmt.Println("Resetting Category News")
	token := pocketbase.PocketbaseAdminLogin()
	client := api.NewApiClient()
	results, err := client.SendRequestWithQuery("GET", "/api/collections/category/records", map[string]string{
		"page":    "1",
		"perPage": "1",
		"sort":    "-created",
	}, nil)

	if err != nil {
		log.Fatal("Error Getting Total Results for Category News")
	}

	totalResultsFloat, ok := results["totalItems"].(float64)
	totalResults := int(totalResultsFloat)
	if !ok {
		log.Fatal("Error Parsing Total Results")
	}

	if totalResults < totalCategoryNewsConst/2 {
		fmt.Println("Less than half of the total results, not purging")
		return
	}

	if totalCategoryNewsConst < totalResults {

		numToRemove := strconv.Itoa(int(math.Abs((float64)(totalResults - totalCategoryNewsConst))))
		fmt.Printf("Found Extra Results, Purging extra results: %s \n", numToRemove)
		ids := getIdsToDelete(client, numToRemove, "category")

		var wg sync.WaitGroup

		for _, id := range ids {
			wg.Add(1)
			go func(id string) {
				defer wg.Done()
				address := fmt.Sprintf("/api/collections/category/records/%s", id)
				_, err := client.SendRequestWithBody("DELETE", address, nil, map[string]string{
					"Authorization": token,
				})
				if err != nil {
					log.Fatal("Error deleting category news")
				}
			}(id)
		}

		wg.Wait()

		fmt.Println("Extra Results Purged Successfully")
		return

	}
	numberToRemove := strconv.Itoa(int(math.Min(20.0, inserted)))
	fmt.Printf("Under the limit, purging normally. Number to remove: %s \n", numberToRemove)

	ids := getIdsToDelete(client, numberToRemove, "category")

	for _, id := range ids {
		address := fmt.Sprintf("/api/collections/category/records/%s", id)
		_, err := client.SendRequestWithBody("DELETE", address, nil, map[string]string{
			"Authorization": token,
		})
		if err != nil {
			log.Fatal("Error deleting category news")
		}
	}

	fmt.Println("Category News Reset Successfully")
}

func resetCountryNews(inserted float64) {
	fmt.Println("Resetting Country News")
	token := pocketbase.PocketbaseAdminLogin()
	client := api.NewApiClient()
	results, err := client.SendRequestWithQuery("GET", "/api/collections/country/records", map[string]string{
		"page":    "1",
		"perPage": "1",
		"sort":    "-created",
	}, nil)

	if err != nil {
		log.Fatal("Error Getting Total Results for Live News")
	}

	totalResultsFloat, ok := results["totalItems"].(float64)
	totalResults := int(totalResultsFloat)
	if !ok {
		log.Fatal("Error Parsing Total Results")
	}

	if totalResults < totalCountryNewsConst/2 {
		fmt.Println("Less than half of the total results, not purging")
		return
	}

	if totalCountryNewsConst < totalResults {

		numToRemove := strconv.Itoa(int(math.Abs((float64)(totalResults - totalCountryNewsConst))))
		fmt.Printf("Found Extra Results, Purging extra results: %s \n", numToRemove)
		ids := getIdsToDelete(client, numToRemove, "country")

		var wg sync.WaitGroup

		for _, id := range ids {
			wg.Add(1)
			go func(id string) {
				defer wg.Done()
				address := fmt.Sprintf("/api/collections/country/records/%s", id)
				_, err := client.SendRequestWithBody("DELETE", address, nil, map[string]string{
					"Authorization": token,
				})
				if err != nil {
					log.Fatal("Error deleting country news")
				}
			}(id)
		}

		wg.Wait()

		fmt.Println("Extra Results Purged Successfully")
		return

	}

	numberToRemove := strconv.Itoa(int(math.Min(20.0, inserted)))
	fmt.Printf("Under the limit, purging normally. Number to remove: %s \n", numberToRemove)
	ids := getIdsToDelete(client, numberToRemove, "country")

	for _, id := range ids {
		address := fmt.Sprintf("/api/collections/country/records/%s", id)
		_, err := client.SendRequestWithBody("DELETE", address, nil, map[string]string{
			"Authorization": token,
		})
		if err != nil {
			log.Fatal("Error deleting country news")
		}
	}

	fmt.Println("Country News Reset Successfully")
}
