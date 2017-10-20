package main

import (
	"fmt"

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

var (
	url = "http://arxiv.org/list/cs.{}/{}{}?show=1000"
)

func main() {
	configor.Load(&config, "config.yml")
	//fmt.Printf("config: %#v", config)
	//test.SlowNCleanTestNeo4j(config.DB.Name, config.DB.Password, config.DB.Host, config.DB.Port)

	categories := map[string]string{"cv": "CV"}

	for _, v := range categories {
		for i := 1; i <= 17; i++ {
			for j := 1; j <= 12; j++ {
				var finalURL = fmt.Sprintf("http://arxiv.org/list/cs.%s/%02d%02d?show=1000", v, i, j)
				fmt.Print(finalURL + "\n")
			}
		}
	}

}
