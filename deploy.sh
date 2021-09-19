#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
git add .
git commit -m 'deploy'
git push -f git@github.com:MrDanielCadeau/MrDanielCadeau.github.io.git master:gh-pages
cd -