package types

type NewsItem struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	PublishedAt string `json:"pubDate"`
	Author      string `json:"source_name"`
	URL         string `json:"link"`
	URLToImage  string `json:"image_url"`
}
