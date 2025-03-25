---
title: Docker部署ani-rss
date: 2025/03/25
permalinkPattern: soft/1742916950224.html
tags:
  - soft
categories:
  - soft
---

```bash
docker run -d \
--name ani-rss \
-v /volume2/docker/ani-rss/config:/config \
-v /volume2/docker/ani-rss/Media:/Media \
-p 7789:7789 \
-e PORT="7789" \
-e CONFIG="/config" \
-e TZ=Asia/Shanghai \
--restart always \
wushuo894/ani-rss
```

