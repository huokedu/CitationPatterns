package main

import (
	"fmt"

	"github.com/dnk0/CitationPatterns/src/crawl/test"
	"github.com/jinzhu/configor"
)

var config = struct {
	DB struct {
		Name     string
		Password string
		Host     string
		Port     string
	}
}{}

func main() {
	configor.Load(&config, "config.yml")
	fmt.Printf("config: %#v", config)
	test.SlowNCleanTestNeo4j(config.DB.Name, config.DB.Password, config.DB.Host, config.DB.Port)
}
