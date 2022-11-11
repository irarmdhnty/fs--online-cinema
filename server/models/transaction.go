package models

import "time"

type Transaction struct {
	ID            int          `json:"id"`
	FilmID        int          `json:"film_id""`
	Film          FilmResponse `json:"film"`
	Status        string       `json:"status"`
	AccountNumber int          `json:"account_number"`
	Tanggal_Order time.Time    `json:"tanggal_order" gorm:"default:Now()"`
}
