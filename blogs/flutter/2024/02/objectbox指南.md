---
title: objectbox指南
date: 2024/01/08
tags:
  - flutter
categories:
  - flutter

---

## 介绍

ObjectBox Flutter数据库是在跨平台应用程序中存储Dart对象的绝佳选择。ObjectBox Flutter数据库专为高性能而设计，是移动的和物联网设备的理想选择。ObjectBox使用最少的CPU，内存和电池，使您的应用程序不仅有效，而且可持续。通过将数据本地存储在设备上，ObjectBox可以帮助您降低云成本，并制作不依赖连接的应用程序。在几分钟内开始使用我们直观的原生Dart API，而无需SQL的麻烦。另外：我们构建了一个数据同步解决方案，使您能够在线和离线跨设备和服务器保持数据同步。

## 快速上手

1. 添加依赖包

```yaml
dependencies:
  objectbox: ^2.4.0
  objectbox_flutter_libs: ^2.4.0
  intl: ^0.18.0
  path_provider: ^2.0.10
  path: ^1.8.0

dev_dependencies:
  build_runner: ^2.0.0
  objectbox_generator: ^2.4.0
```

2. 声明数据模型
```dart
import 'package:intl/intl.dart';
import 'package:objectbox/objectbox.dart';

import 'objectbox.g.dart';

@Entity()
class Note {
  int id;

  String text;
  String? comment;

  DateTime date;

  Note(this.text, {this.id = 0, this.comment, DateTime? date})
      : date = date ?? DateTime.now();

  String get dateFormat => DateFormat('dd.MM.yyyy hh:mm:ss').format(date);
}
```

3. 封装 *ObjectBox* 类
```dart
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;

import 'model.dart';
import 'objectbox.g.dart'; // created by `flutter pub run build_runner build`

/// Provides access to the ObjectBox Store throughout the app.
///
/// Create this in the apps main function.
class ObjectBox {
  /// The Store of this app.
  late final Store _store;

  late final Box<Note> _noteBox;

  ObjectBox._create(this._store) {
    _noteBox = Box<Note>(_store);
  }

  static Future<ObjectBox> create() async {
    final store = await openStore(
        directory:
            p.join((await getApplicationDocumentsDirectory()).path, "obx-demo"),
        macosApplicationGroup: "objectbox.demo");
    return ObjectBox._create(store);
  }

  Stream<List<Note>> getNotes() {
    final builder = _noteBox.query().order(Note_.date, flags: Order.descending);
    return builder
        .watch(triggerImmediately: true)
        .map((query) => query.find());
  }

  Future<void> addNote(String text) => _noteBox.putAsync(Note(text));

  Future<void> removeNote(int id) => _noteBox.removeAsync(id);
}

```

4. 运行 `flutter pub run build_runner build` 生成 `objectbox.g.dart`
5. 初始化
```3dart
import 'dart:async';
import 'package:flutter/material.dart';
import 'model.dart';
import 'objectbox.dart';

/// Provides access to the ObjectBox Store throughout the app.
late ObjectBox objectbox;

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  objectbox = await ObjectBox.create();
  runApp(const MyApp());
}
```



## 如何监听数据变化

- 监听数据变化,记录

```dart
getObjLogs(["INFO", "ERROR", "EXCEPTION"]).listen((event) {
    final logsQuery = _objLogBox.query().order(ObjLog_.date).build();
    final logs = logsQuery.find();
    if (logs.length > 10) {
      final deleteLogs = logs.take(5).map((e) => e.id).toList();
      _objLogBox.removeMany(deleteLogs);
    }
  });
```



