package tools

import (
	"encoding/json"
	"ln-payforblob/internal/app/models"
	"log"
	"net/http"
	"os"
)

func GetEnv(key, fallback string) string {
	value, exists := os.LookupEnv(key)
	if !exists {
		log.Printf("Can not find the value of the environment variable %s, app will use default value", key)
		return fallback
	}
	return value
}

func JSONResponse (writer http.ResponseWriter, br *models.RPCPayResponseBody, code int) {
	writer.Header().Set("Content-Type", "application/json; charset=utf-8")
	writer.Header().Set("X-Content-Type-Options", "nosniff")
	writer.WriteHeader(code)
	json.NewEncoder(writer).Encode(br)
}