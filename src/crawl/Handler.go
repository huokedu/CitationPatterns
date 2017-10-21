package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

var (
	baseURL = "https://arxiv.org"
)

func handleDoc(doc *goquery.Document) {
	doc.Find("dt").Each(func(i int, s *goquery.Selection) {
		// For each item found, get the band and title
		s.Find(".list-identifier a").Each(func(j int, li *goquery.Selection) {
			title, hasTitle := li.Attr("title")
			if hasTitle {
				if title == "Download PDF" {
					href, hasHref := li.Attr("href")
					if hasHref {
						crawled = append(crawled, baseURL+href)
						downloadAndSavePdf(baseURL + href)
					}
				}
			}
		})
	})
}

func downloadAndSavePdf(url string) {
	tokens := strings.Split(url, "/")
	fileName := tokens[len(tokens)-1]
	crawled = append(crawled, fmt.Sprint("Downloading ", url, " to ", " save/"+fileName+".pdf"))

	// TODO: check file existence first with io.IsExist
	output, err := os.Create("save/" + fileName + ".pdf")
	if err != nil {
		crawled = append(crawled, fmt.Sprint("Error while creating", "save/"+fileName+".pdf", "-", err))
		return
	}
	defer output.Close()

	response, err := http.Get(url)
	if err != nil {
		fmt.Println("Error while downloading", url, "-", err)
		return
	}
	defer response.Body.Close()

	n, err := io.Copy(output, response.Body)
	if err != nil {
		fmt.Println("Error while downloading", url, "-", err)
		return
	}

	fmt.Println(n, "bytes downloaded.")
}
