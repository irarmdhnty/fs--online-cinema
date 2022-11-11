package routes

import (
	"github.com/gorilla/mux"
	"online-cinema/handlers"
	"online-cinema/pkg/mysql"
	"online-cinema/repositories"
)

func AuthRoutes(r *mux.Router) {
	authRepository := repositories.ReposiitoryAuth(mysql.DB)
	h := handlers.HandlerAuth(authRepository)

	r.HandleFunc("/register", h.Register).Methods("POST")
	r.HandleFunc("/login", h.Login).Methods("POST")

}
