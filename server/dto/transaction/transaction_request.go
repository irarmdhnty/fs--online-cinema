package transaction

import "time"

type TransactionRequest struct {
	FilmID        int       `json:"film_id" form:"film_id" gorm:"type: int"`
	Status        string    `json:"status" gorm:"type:text" form:"status"`
	AccountNumber int       `json:"account_number" form:"account_number" gorm:"type: int"`
	TanggalOrder  time.Time `json:"tanggal_order" form:"tanggal_order"`
}
