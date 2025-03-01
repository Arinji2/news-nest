package cronjobs

import (
	"fmt"
	"os"

	"github.com/Arinji2/news-backend/api"
	"github.com/Arinji2/news-backend/types"
	"github.com/joho/godotenv"
)

const size = 10

var categories = []string{
	"sports", "business", "entertainment", "science", "technology"}
var countries = []string{
	"cn", "in", "us", "ru", "za", "ca"}

func getAllLiveNews() []types.NewsItem {
	godotenv.Load()
	token := os.Getenv("NEWS_KEY")
	liveNews := getLiveNews(token)
	return liveNews
}

func getAllCountryNews() map[string][]types.NewsItem {
	godotenv.Load()
	token := os.Getenv("NEWS_KEY")
	countryNews := make(map[string][]types.NewsItem)
	for _, country := range countries {
		countryNews[country] = getCountryNews(token, country)
	}
	return countryNews
}

func getAllCategoryNews() map[string][]types.NewsItem {
	godotenv.Load()
	token := os.Getenv("NEWS_KEY")
	categoryNews := make(map[string][]types.NewsItem)
	for _, category := range categories {
		categoryNews[category] = getCategoryNews(token, category)
	}
	return categoryNews
}

func getLiveNews(token string) []types.NewsItem {
	client := api.NewApiClient("https://newsdata.io/api/1")
	result, err := client.SendRequestWithQuery("GET", "/latest", map[string]string{
		"apiKey":   token,
		"image":    "1",
		"language": "en",
		"size":     fmt.Sprintf("%d", size),
	}, nil)

	if err != nil {
		fmt.Println(fmt.Errorf("error getting news at live: %v", err))
	}

	news := parseAndCleanupNewsItems(result)
	parsedNews := []types.NewsItem{}
	for _, item := range news {
		if verifyAllFields(item) {
			parsedNews = append(parsedNews, item)
		}
	}

	return parsedNews

}

func getCategoryNews(token string, category string) []types.NewsItem {
	client := api.NewApiClient("https://newsdata.io/api/1")
	result, err := client.SendRequestWithQuery("GET", "/latest", map[string]string{
		"apiKey":   token,
		"image":    "1",
		"language": "en",
		"size":     fmt.Sprintf("%d", size),
		"category": category,
	}, nil)

	if err != nil {
		fmt.Println(fmt.Errorf("error getting news at category: %v", err))
	}

	news := parseAndCleanupNewsItems(result)
	parsedNews := []types.NewsItem{}
	for _, item := range news {
		if verifyAllFields(item) {
			parsedNews = append(parsedNews, item)
		}
	}

	return parsedNews

}

func getCountryNews(token string, country string) []types.NewsItem {
	client := api.NewApiClient("https://newsdata.io/api/1")
	result, err := client.SendRequestWithQuery("GET", "/latest", map[string]string{
		"apiKey":   token,
		"image":    "1",
		"language": "en",
		"size":     fmt.Sprintf("%d", size),
		"country":  country,
	}, nil)

	if err != nil {
		fmt.Println(fmt.Errorf("error getting news at country: %v", err))
	}

	news := parseAndCleanupNewsItems(result)
	parsedNews := []types.NewsItem{}
	for _, item := range news {
		if verifyAllFields(item) {
			parsedNews = append(parsedNews, item)
		}
	}
	return parsedNews

}
