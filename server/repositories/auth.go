package repositories

import (
	"gorm.io/gorm"
	"online-cinema/models"
)

type AuthRepository interface {
	Register(user models.User) (models.User, error)
	Login(email string) (models.User, error)
}

func ReposiitoryAuth(db *gorm.DB) *repository {
	return &repository{db}
}

// Register
func (r *repository) Register(user models.User) (models.User, error) {
	err := r.db.Create(&user).Error
	return user, err
}

// Login
func (r *repository) Login(email string) (models.User, error) {
	var user models.User
	err := r.db.First(&user, "email=?", email).Error
	return user, err
}
