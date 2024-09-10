---
title: Ruby 指南
date: 2024/02/20
permalinkPattern: mac/1714839559000.html
tags:
  - mac
categories:
  - mac
---

### 安装 Ruby

- 请先确保安装 `HomeBrew`

```bash
brew install ruby
```

### 添加环境变量

- 如果使用 `zsh` Shell, 修改 `~/.zshrc` 添加一下配置

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

- 开发 Flutter 原生 Mac 应用需要用到

```bash
sudo gem install cocoapods
```
