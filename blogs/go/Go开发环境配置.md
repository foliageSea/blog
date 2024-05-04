---
title: Go开发环境配置
date: 2024/02/20
permalinkPattern: go/1714839528000.html
tags:
  - go
categories:
  - go

---

## 开发环境配置
### 安装 Docker
```bash
# 安装 docker
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
# 启动 docker
systemctl start docker
# 设置 docker 开机自启
systemctl enable docker
```

### 安装 Docker-Compose
```bash
curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

docker-compose -v
```

### 安装 MySql

拉取镜像

```bash
docker pull mysql:8.0
```

创建 MySql 容器

```bash
docker run -d \
--name mysql-server \
-e MYSQL_ROOT_PASSWORD=[密码] \
-p 3306:3306 \
mysql:8.0
```



### 安装 Go

```bash
# 下载压缩包
# 解压
tar -xvf go1.15.3.linux-amd64.tar.gz

# 配置环境变量
vim ~/.bashrc
  
export GOROOT=/root/go
export GOPATH=/root/projects/go
export PATH=$PATH:$GOROOT/bin:$GPPATH/bin

# 设置代理
go env -w GOPROXY=https://goproxy.io,direct
go env -w GO111MODULE=on

```



### 安装 Node.js

```bash
# 安装 node.js 版本管理工具
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# 设置代理
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
# 安装指定版本的 node
nvm install 16
nvm list
nvm use 16
# 指定镜像源安装全局工具
npm install -g yarn pnpm nrm --registry=http://registry.npmmirror.com
```




###  设置容器自启

```bash
docker container update --restart=always <容器名称>
```



```bash
docker images
docker ps -a
```















