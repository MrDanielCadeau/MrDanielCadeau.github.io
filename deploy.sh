#!/usr/bin/env sh
set -e
git checkout development
git branch -D prod
git checkout -b prod
git add -A
git commit -m 'deploy'
git push -f git@github.com:MrDanielCadeau/MrDanielCadeau.github.io.git prod