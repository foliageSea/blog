---
title: yarn安装依赖跳过版本检查
date: 2024/09/05
permalinkPattern: mac/1725521125066.html
tags:
  - vue
categories:
  - vue
---
在执行 yarn install 时可以通过添加 --ignore-engines 选项来跳过引擎版本检查等一些常规的兼容性检查，但这可能会导致潜在的运行时问题，所以需谨慎使用。
```bash
yarn install --ignore-engines
```