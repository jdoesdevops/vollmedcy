#!/bin/bash
cd server && npm install && "tsc-watch --onSuccess \"node ./build/server.js\""