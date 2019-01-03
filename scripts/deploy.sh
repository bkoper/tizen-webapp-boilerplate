#!/bin/bash

tizen install -- $1 --name $2".wgt"
tizen run --pkgid $3
