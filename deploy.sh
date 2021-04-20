#!/usr/bin/env sh

# abort on errors
set -e

cd personal_website_v2

# build
npm run build

# if you are deploying to a custom domain
echo 'www.manningb.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:manningb/manningb.github.io.git master

cd -
