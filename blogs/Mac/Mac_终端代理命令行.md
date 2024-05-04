---
title: Mac 终端代理命令行
date: 2024/03/06
permalinkPattern: mac/2024-03-06-01.html
tags:
  - mac
categories:
  - mac
---

### Mac 终端代理命令行

- 如果执行安装 HomeBrew 的脚本失败, 建议开启终端代理
- 具体端口参考 Clash 设置, `7890` 是 `Clash Verge` 的默认端口

```bash
export https_proxy=http://127.0.0.1:7890; export http_proxy=http://127.0.0.1:7890;
```