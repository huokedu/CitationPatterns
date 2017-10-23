#!/bin/bash

DATE=`date '+%d.%m.%Y'`

value=`cat template.md`
echo "$value" > $DATE.Scrum.md
echo "* [$DATE]($DATE.Scrum.md)" >> index.md
