package main

import (
	"bytes"
	"runtime"
	"strconv"
	"strings"

	tm "github.com/buger/goterm"
)

func getCrawlStats() (*tm.Box, int, int) {
	print("\033[H\033[2J")
	var mem runtime.MemStats
	var lineCount int
	runtime.ReadMemStats(&mem)
	buf := bytes.NewBuffer(nil)
	buf.WriteString("LOG PROFILE:\n")
	lineCount++
	buf.WriteString(strings.Repeat("=", 72) + "\n")
	lineCount++
	buf.WriteString("[ " + strconv.Itoa(crawledCount) + " finalized / " + strconv.Itoa(crawledStarted) + " requested ]\n")
	lineCount++
	for _, log := range crawled {

		buf.WriteString(log + "\n")
		lineCount++
	}
	buf.WriteString("\n")
	lineCount++

	box := tm.NewBox(100|tm.PCT, lineCount+1, 0)

	box.Write([]byte(buf.String()))

	return box, lineCount + 2, 72
}
