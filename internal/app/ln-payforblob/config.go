package lnpayforblob

import "ln-payforblob/tools"

// General config for rest api
type Config struct {
	//Port for start api
	Port string
}

// Should return default config
func NewConfig() *Config {
	return &Config{
		Port: tools.GetEnv("PORT", ":10000"),
	}
}
