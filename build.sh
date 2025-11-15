#!/bin/bash
# todo autogenerate update date

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

# Add update.js
CURRENT_DATE=$(date '+%d %b %Y')
echo "var e=document.getElementById(\"update_date\");null!==e&&(e.innerHTML=\"$CURRENT_DATE);" > ./build-min/update.js

exit 0
