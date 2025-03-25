---
title: Docker部署Clash
date: 2025/03/25
permalinkPattern: soft/1742917278530.html
tags:
  - soft
categories:
  - soft
---

```bash
docker run -d --name clash --network host -v /volume2/docker/clash:/root/.config/clash -p 7890:7890 -p 7891:7891 -p 9090:9090 --restart unless-stopped dreamacro/clash

docker run -d --name yacd -p 9091:80 --restart unless-stopped haishanh/yacd

```

