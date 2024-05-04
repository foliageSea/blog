---
title: Git项目单独配置
date: 2024/02/20
permalinkPattern: flutter/1714839496000.html
tags:
  - flutter git
categories:
  - flutter

---

```ini
[user]
  email = 2350824800@qq.com
  name = foliageSea
[http]
  proxy = http://127.0.0.1:7890
[https]
  proxy = https://127.0.0.1:7890
```

`init_git.sh`

```bash
git config user.email "2350824800@qq.com"
git config user.name  "foliageSea"
git config http.proxy "http://127.0.0.1:7890"
```



