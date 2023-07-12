#!/bin/bash

trap "exit" INT TERM ERR
trap "kill 0" EXIT
pnpm watch &
# send stdin to this one
pnpm nodemon