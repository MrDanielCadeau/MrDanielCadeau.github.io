#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
git init
git checkout -b prod
cat CNAME > 'www.dcadeau.tech'
git add -A
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:MrDanielCadeau/MrDanielCadeau.github.io.git prod
cd -