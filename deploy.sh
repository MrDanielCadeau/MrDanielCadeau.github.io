#!/usr/bin/env sh
set -e
git delete prod
git checkout -b prod
git add -A
git commit -m 'deploy'
git push -f git@github.com:MrDanielCadeau/MrDanielCadeau.github.io.git prod
cd -