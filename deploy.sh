#!/usr/bin/env sh

# abort on errors
set -e

# just to get us all at the same starting point
git checkout demo-site

# build
npm run build

# navigate into the build output directory
cd dist

git add dist/
git commit -m "deploy"

git push -f origin demo-site
