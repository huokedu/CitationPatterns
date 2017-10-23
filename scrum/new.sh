#!/bin/bash

DATE=`date '+%d.%m.%Y'`

value=`cat template.md`
echo "$value" > $DATE.Scrum.md
