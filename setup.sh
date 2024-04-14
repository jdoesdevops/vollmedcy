#!/bin/bash
cd server && npm install && "tsc-watch --onSuccess \"node ./build/server.js\"" && sleep 30 && cd ../web && npm install && react-scripts start && sleep 30