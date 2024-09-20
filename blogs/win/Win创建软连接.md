---
title: Win创建软连接
date: 2024/09/20
permalinkPattern: win/1726799279550.html
tags:
  - win
categories:
  - win
---
```powershell
New-Item -ItemType SymbolicLink -Path "C:\Users\foliage\Desktop" -Target "D:\foliage\Desktop"
```