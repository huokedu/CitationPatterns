package main

import (
	"bytes"
	"fmt"
	"runtime"
	"strings"

	tm "github.com/buger/goterm"
)

func getCrawlStats() (*tm.Box, int, int) {
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
	buf.WriteString(fmt.Sprintf("NumCrawled: %d\n", len(crawled)))
	lineCount++
	buf.WriteString("\n")
	lineCount++

	box := tm.NewBox(72, lineCount+1, 0)

	//box.Write([]byte(buf.String()))
	//fmt.Println(box.String())

	return box, lineCount + 2, 72
}
