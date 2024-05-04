---
title: Flutter小记
date: 2024/02/20
permalinkPattern: flutter/1714839486000.html
tags:
  - flutter
categories:
  - flutter
---

## Flutter SDK 版本管理工具

- fvm: https://fvm.app/

```bash
# 项目 Flutter SDK 版本管理, 创建软连接
fvm use 3.10.5
```


### Mac Flutter开发环境变量配置

```shell
# Flutter
export PATH="$PATH":"$HOME/fvm/default/bin"

# Flutter 镜像源
export PUB_HOSTED_URL="https://pub.flutter-io.cn"
export FLUTTER_STORAGE_BASE_URL="https://storage.flutter-io.cn"

# Dart Package
export PATH="$PATH":"$HOME/.pub-cache/bin"

# adb
export PATH="$PATH":"$HOME/tools/AndroidSDK/platform-tools"
```











