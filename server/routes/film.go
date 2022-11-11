package routes

import (
	"github.com/gorilla/mux"
	"online-cinema/handlers"
	"online-cinema/pkg/midleware"
	"online-cinema/pkg/mysql"
	"online-cinema/repositories"
)

func FilmsRoute(r *mux.Router) {
	categoryRepo := repositories.RepositoryFilm(mysql.DB)
	h := handlers.HandlerFilm(categoryRepo)

	r.HandleFunc("/films", h.GetFilm).Methods("GET")
	r.HandleFunc("/film/{id}", h.GetFilmId).Methods("GET")
	r.HandleFunc("/film/create", midleware.UploadFile(h.CreateFilm)).Methods("POST")
	r.HandleFunc("/film/update/{id}", h.UpdateFilm).Methods("PATCH")
	r.HandleFunc("/film/delete/{id}", h.DeleteFilm).Methods("DELETE")

}
