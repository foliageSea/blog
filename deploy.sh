#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist


git init
git config user.email "2350824800@qq.com"
git config user.name  foliageSea
git add .
git commit -m 'deploy'
git config http.proxy "http://127.0.0.1:7890"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/foliageSea/blog.git main:blog
