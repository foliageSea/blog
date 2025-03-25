---
title: Docker部署QQ机器人
date: 2025/03/25
permalinkPattern: soft/1742916752033.html
tags:
  - soft
categories:
  - soft
---

```bash
docker run -itd -p 6185:6185 -p 6199:6199 -v /volume2/docker/astrbot/data:/AstrBot/data -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro -v /volume2/docker/fatetrial_jmdownloader:/fatetrial_jmdownloader --name astrbot soulter/astrbot:latest


docker run -d \
-e NAPCAT_GID=$(id -g) \
-e NAPCAT_UID=$(id -u) \
-p 3002:3000 \
-p 3001:3001 \
-p 6099:6099 \
-v /volume2/docker/fatetrial_jmdownloader:/fatetrial_jmdownloader \
--name napcat \
--restart=always \
mlikiowa/napcat-docker:latest
```

