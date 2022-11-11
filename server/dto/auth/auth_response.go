package auth

type AuthResponse struct {
	ID       int    `json:"id"`
	Email    string `json:"email"`
	FullName string `json:"fullName"`
	Role     string `json:"role"`
	Phone    string `json:"phone"`
	Token    string `json: "token"`
}
