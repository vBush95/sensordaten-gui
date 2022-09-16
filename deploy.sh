#!/usr/bin/env sh

# abort on errors
set -e

# just to get us all at the same starting point
git checkout demo-site

# delete your build folder
rm -rf dist/

# create a 'build' directory checked out to the gh-pages branch
git worktree add -B gh-pages dist origin/gh-pages

# build
npm run build

# navigate into the build output directory
cd dist

# fail if for some reason this isn't the gh-pages branch
current_branch=$(git symbolic-ref --short -q HEAD)
if [ "$current_branch" != "gh-pages" ]; then
  echo "Expected build folder to be on gh-pages branch."
  exit 1
fi

git add . && git commit -m "Update gh-pages"
git push