package main

import (
	"bytes"
	"fmt"
	"runtime"
	"strings"
	"sync"
	"time"

	"github.com/PuerkitoBio/fetchbot"
	tm "github.com/buger/goterm"
)

func runMemStats(f *fetchbot.Fetcher, tick time.Duration) {
	var mu sync.Mutex
	var di *fetchbot.DebugInfo

	// Start goroutine to collect fetchbot debug info
	go func() {
		for v := range f.Debug() {
			mu.Lock()
			di = v
			mu.Unlock()
		}
	}()
	// Start ticker goroutine to print mem stats at regular intervals
	go func() {
		c := time.Tick(tick)
		for _ = range c {
			mu.Lock()
			printMemStats(di)
			mu.Unlock()
		}
	}()
}

func printMemStats(di *fetchbot.DebugInfo) {
	box, _, _ := getMemStats(di)
	boxCrawl, _, _ := getCrawlStats()

	fmt.Println(box.String())
	fmt.Println(boxCrawl.String())
}

func getMemStats(di *fetchbot.DebugInfo) (*tm.Box, int, int) {
	print("\033[H\033[2J")
	var mem runtime.MemStats
	var lineCount int
	runtime.ReadMemStats(&mem)
	buf := bytes.NewBuffer(nil)
	buf.WriteString("MEMORY PROFILE:\n")
	lineCount++
	buf.WriteString(strings.Repeat("=", 72) + "\n")
	lineCount++
	buf.WriteString(fmt.Sprintf("Alloc: %d Kb\n", mem.Alloc/1024))
	lineCount++
	buf.WriteString(fmt.Sprintf("TotalAlloc: %d Kb\n", mem.TotalAlloc/1024))
	lineCount++
	buf.WriteString(fmt.Sprintf("NumGC: %d\n", mem.NumGC))
	lineCount++
	buf.WriteString(fmt.Sprintf("Goroutines: %d\n", runtime.NumGoroutine()))
	lineCount++
	if di != nil {
		buf.WriteString(fmt.Sprintf("NumHosts: %d\n", di.NumHosts))
		lineCount++
	}
	buf.WriteString(fmt.Sprintf("NumCrawled: %d\n", len(crawled)))
	lineCount++
	buf.WriteString("\n")
	lineCount++

	box := tm.NewBox(72, lineCount+1, 0)

	box.Write([]byte(buf.String()))
	//fmt.Println(box.String())

	return box, lineCount + 2, 72
}
