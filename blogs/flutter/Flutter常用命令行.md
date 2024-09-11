---
title: Flutter常用命令行
date: 2024/09/11
permalinkPattern: flutter/1726042981332.html
tags:
  - flutter
categories:
  - flutter
---

### 新建Flutter空白项目, 并指定项目平台和组织
```bash
flutter create --platforms=android <project_name> --org=com.foliage --empty
```
- platforms: `[ios (default), android (default), windows (default), linux (default), macos (default), web(default)]`
- org: 组织名称
- empty: 创建空白项目

### 指定Flutter项目的环境依赖
```yaml
environment:
  sdk: '>=3.0.5 <4.0.0'
  flutter: '3.22.2'
```
- sdk: Dart SDK 版本
- flutter: Flutter SDK 版本