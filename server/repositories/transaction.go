package repositories

import (
	"online-cinema/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	GetTransaction() ([]models.Transaction, error)
	GetTransactionID(ID int) (models.Transaction, error)
	CreateTransaction(transaction models.Transaction) (models.Transaction, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) GetTransaction() ([]models.Transaction, error) {
	var transaction []models.Transaction
	err := r.db.Preload("Film.Category").Find(&transaction).Error
	return transaction, err
}

func (r *repository) GetTransactionID(ID int) (models.Transaction, error) {
	var transactionId models.Transaction

	err := r.db.First(&transactionId, ID).Error
	return transactionId, err
}

func (r *repository) CreateTransaction(transaction models.Transaction) (models.Transaction, error) {
	err := r.db.Create(&transaction).Error
	return transaction, err
}
