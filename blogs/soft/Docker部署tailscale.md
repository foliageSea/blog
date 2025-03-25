---
title: Docker部署tailscale
date: 2025/03/25
permalinkPattern: soft/1742916950224.html
tags:
  - soft
categories:
  - soft
---

```bash
version: '3.7'
services:
    tailscale:
        container_name: tailscale
        volumes:
            - /volume2/docker/tailscale/var/lib:/var/lib
            - /volume2/docker/tailscale/dev/net/tun:/dev/net/tun
        network_mode: host
        restart: unless-stopped
        environment:
            - TS_AUTHKEY=*
            - TS_EXTRA_ARGS=--advertise-exit-node
            - TS_ROUTES=192.168.31.0/24
            - TS_HOSTNAME=UGNAS
            - TS_STATE_DIR=./state/
        image: tailscale/tailscale
```

