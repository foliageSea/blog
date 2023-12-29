#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git config user.email "2350824800@qq.com"
git config user.name  foliageSea
git add .
git commit -m 'push to github'
git config http.proxy "http://127.0.0.1:7890"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/foliageSea/blog.git main:main
