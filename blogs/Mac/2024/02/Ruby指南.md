---
title: Ruby指南
date: 2024/02/13
tags:
  - mac
categories:
  - mac
---

### 安装 Ruby

```bash
brew install ruby
```

### 添加环境变量

```bash
export PATH=/opt/homebrew/opt/ruby/bin:$PATH
export LDFLAGS="-L/opt/homebrew/opt/ruby/lib"
export CPPFLAGS="-I/opt/homebrew/opt/ruby/include"
```

### 设置国内镜像源

```bash
# 添加镜像源并移除默认源
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/
# 列出已有源
gem sources -l
# 应该只有镜像源一个

bundle config mirror.https://rubygems.org https://mirrors.tuna.tsinghua.edu.cn/rubygems
```

### 安装 cocoapods

```bash
sudo gem install cocoapods
```
