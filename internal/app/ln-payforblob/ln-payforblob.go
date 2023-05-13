package lnpayforblob

import (
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
)

type PayForBlob struct {
	//Unexported field
	config  *Config
	router  *chi.Mux
}

// PayForBlob constructor
func New(conf *Config) *PayForBlob {
	return &PayForBlob{
		config: conf,
		router: chi.NewRouter(),
	}
}

// Start http server and connection to db
func (s *PayForBlob) Start() error {
	s.configureRouter()
	log.Println("Starting api server at port", s.config.Port)
	return http.ListenAndServe(s.config.Port, s.router)
}

// Method for configure Router
func (s *PayForBlob) configureRouter() {
	// A good base middleware stack
	s.router.Use(middleware.RequestID)                            // Injects a request ID into the context of each request
	s.router.Use(middleware.RealIP)                               // Sets a http.Request's RemoteAddr to either X-Forwarded-For or X-Real-IP
	s.router.Use(middleware.Logger)                               // Logs the start and end of each request with the elapsed processing time
	s.router.Use(middleware.Recoverer)                            // Gracefully absorb panics and prints the stack trace
	// Set a timeout value on the request context (ctx), that will signal through ctx.Done() that the request has timed out and further processing should be stopped.
	s.router.Use(middleware.Timeout(60 * time.Second))
	s.router.Use(cors.Handler(cors.Options{AllowedOrigins: []string{"https://*", "http://*"}}))
	// Public routes
	s.router.Post("/payforblob", s.RPCPFB) // POST /api/v1/payforblob
}
