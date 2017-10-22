package main

import (
	"flag"
	"fmt"
	"net/http"
	"runtime"

	"github.com/PuerkitoBio/fetchbot"
	"github.com/PuerkitoBio/goquery"
	"github.com/jinzhu/configor"
)

// config represents the datastructure parsed from the "config.yml"-config-file
// the data will later be used to start the database connection
var config = struct {
	DB struct {
		Name     string
		Password string
		Host     string
		Port     string
	}
}{}

var (
	// url represents the general url template for arxiv
	url            = "http://arxiv.org/list/cs.%s/%02d%02d?show=1000"
	memStats       = flag.Duration("memstats", 0, "display memory statistics at a given interval")
	crawled        []string
	crawledCount   int
	crawledStarted int
)

func logHandler(wrapped fetchbot.Handler) fetchbot.Handler {
	return fetchbot.HandlerFunc(func(ctx *fetchbot.Context, res *http.Response, err error) {
		if err == nil {
			crawled = append(crawled, fmt.Sprintf("[%d] %s %s - %s\n", res.StatusCode, ctx.Cmd.Method(), ctx.Cmd.URL(), res.Header.Get("Content-Type")))
			crawledCount++
		}
		//body, err := ioutil.ReadAll(res.Body)
		//var urlCtx = ctx.Cmd.URL().String()
		//crawled = append(crawled, urlCtx)
		//fmt.Print(string(body[:]))
		wrapped.Handle(ctx, res, err)
	})
}

func main() {
	flag.Parse()

	// Create the muxer
	mux := fetchbot.NewMux()

	// Handle all errors the same
	mux.HandleErrors(fetchbot.HandlerFunc(func(ctx *fetchbot.Context, res *http.Response, err error) {
		crawled = append(crawled, fmt.Sprintf("[ERR] %s %s - %s\n", ctx.Cmd.Method(), ctx.Cmd.URL(), err))
	}))

	// Handle GET requests for html responses, to parse the body and enqueue all links as HEAD
	// requests.
	mux.Response().Method("GET").ContentType("text/html").Handler(fetchbot.HandlerFunc(
		func(ctx *fetchbot.Context, res *http.Response, error error) {
			// Process the body to find the links
			doc, err := goquery.NewDocumentFromResponse(res)
			if err != nil {
				fmt.Printf("[ERR] %s %s - %s\n", ctx.Cmd.Method(), ctx.Cmd.URL(), err)
				return
			}
			if doc != nil {
				go handleDoc(doc)
			}
		}))

	configor.Load(&config, "config.yml")
	//fmt.Printf("config: %#v", config)
	//test.SlowNCleanTestNeo4j(config.DB.Name, config.DB.Password, config.DB.Host, config.DB.Port)

	categories := initCategories()

	h := logHandler(mux)
	f := fetchbot.New(h)

	// First mem stat print must be right after creating the fetchbot
	if *memStats > 0 {
		// Print starting stats
		printMemStats(nil)
		// Run at regular intervals
		runMemStats(f, *memStats)
		// On exit, print ending stats after a GC
		defer func() {
			runtime.GC()
			printMemStats(nil)
		}()
	}

	q := f.Start()

	for _, v := range categories {
		for i := 17; i >= 13; i-- {
			for j := 1; j <= 12; j++ {
				var finalURL = fmt.Sprintf("http://arxiv.org/list/%s/%02d%02d?show=1000", v, i, j)
				go q.SendStringGet(finalURL)
				crawledStarted++
			}
		}
	}
	q.Close()
}
