#!/bin/bash
( cd b_spacial ; rails s -p 16198) & ( cd f_spacial ; npm start ) && fg
