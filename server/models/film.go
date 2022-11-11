package models

type Film struct {
	ID          int              `json:"id"`
	Title       string           `json:"title"`
	CategoryID  int              `json:"categorie_id""`
	Category    CategoryResponse `json:"category"`
	Price       int              `json:"price"`
	FilmUrl     string           `json:"filmUrl"`
	Description string           `json:"description"`
	Image       string           `json:"image"`
	
}

type FilmResponse struct {
	ID          int              `json:"id"`
	Title       string           `json:"title"`
	CategoryID  int              `json:"categorie_id""`
	Category    CategoryResponse `json:"category"`
	Price       int              `json:"price"`
	FilmUrl     string           `json:"filmUrl"`
	Description string           `json:"description"`
	Image       string           `json:"image"`
}


func (FilmResponse) TableName() string {
	return "films"
}