package main

import (
	"log"
	payforblob "ln-payforblob/internal/app/ln-payforblob"
)

func main() {
	//config instance
	config := payforblob.NewConfig()
	//server instance
	s := payforblob.New(config)
	//server start
	if err := s.Start(); err != nil {
		log.Fatal(err)
	}
}
