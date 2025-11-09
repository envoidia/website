#!/bin/bash

# Delete existing builds
rm -r ./build
rm -r ./build-min

# Copy src to build
cp -rf ./src ./build

# Compile TypeScript
tsc

# Delete TypeScript source files
find ./build -type f -name "*.ts" -delete

# Delete IDE files
rm -r ./build/.vscode
rm -r ./build/.idea

# Minify
npx minify-all-cli -s ./build -d ./build-min

exit 0
