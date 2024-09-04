---
title: Flutter插件安卓项目io.flutter索引问题解决方案
date: 2024/09/04
permalinkPattern: flutter/1725442205185.html
tags:
  - flutter
categories:
  - flutter
---


1. 新建 `android/resolve_dependencies.gradle`
```java
import java.nio.file.Paths

//获取local.properties配置文件
def localProperties = new Properties()
def localPropertiesFile = rootProject.file('local.properties')

if (localPropertiesFile.exists()) {
    localPropertiesFile.withReader('UTF-8') {
        reader -> localProperties.load(reader)
    }
}

//获取flutter的sdk路径
def flutterRootPath = localProperties.getProperty('flutter.sdk')

if (flutterRootPath == null) {
    throw new GradleException("Flutter SDK not found. Define location with flutter.sdk in the local.properties file.")
}

String storageUrl = System.getenv('FLUTTER_STORAGE_BASE_URL') ?: "https://storage.googleapis.com"

repositories {
    google()
    mavenCentral()
    maven {
        url "$storageUrl/download.flutter.io"
    }
}

File flutterRoot = projectDir.parentFile.parentFile.parentFile

assert flutterRoot.isDirectory()
String engineVersion = Paths.get(flutterRootPath, "bin", "internal", "engine.version")
        .toFile().text.trim()

configurations {
    flutterRelease.extendsFrom releaseImplementation
    flutterDebug.extendsFrom debugImplementation
    flutterProfile.extendsFrom debugImplementation
}

dependencies {
    flutterRelease "io.flutter:flutter_embedding_release:1.0.0-$engineVersion"
    flutterRelease "io.flutter:armeabi_v7a_release:1.0.0-$engineVersion"
    flutterRelease "io.flutter:arm64_v8a_release:1.0.0-$engineVersion"

    flutterProfile "io.flutter:flutter_embedding_profile:1.0.0-$engineVersion"
    flutterProfile "io.flutter:armeabi_v7a_profile:1.0.0-$engineVersion"
    flutterProfile "io.flutter:arm64_v8a_profile:1.0.0-$engineVersion"

    compileOnly "io.flutter:flutter_embedding_debug:1.0.0-$engineVersion"
    compileOnly "io.flutter:armeabi_v7a_debug:1.0.0-$engineVersion"
    compileOnly "io.flutter:arm64_v8a_debug:1.0.0-$engineVersion"
    compileOnly "io.flutter:x86_debug:1.0.0-$engineVersion"
    compileOnly "io.flutter:x86_64_debug:1.0.0-$engineVersion"
}

```

2. 修改 `android/build.gradle` 添加引用
```java
apply from: './resolve_dependencies.gradle'
```
