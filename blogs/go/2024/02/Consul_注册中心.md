---
title: Consul 注册中心
date: 2024/02/20
permalinkPattern: go/2024022001.html
tags:
  - go
categories:
  - go

---

## Consul

- 服务注册
- 服务发现 

### 访问DNS

- 测试Consul的DNS服务是否可用

```bash
dig @192.168.31.172 -p 8600 consul.service.consul SRV
```

`consul.service.consul` 域名, 可用通过域名发现微服务的IP和端口



## Consul 的 API 接口

- 添加服务
- 删除服务
- 设置健康检查



## Go 集成 Consul

```go
package main

import (
	"fmt"
	"github.com/hashicorp/consul/api"
)

func Register(address string, port int, name string, tags []string, id string) error {
	cfg := api.DefaultConfig()
	// consul 的HTTP接口地址
	cfg.Address = "192.168.31.172:8500"

	client, err := api.NewClient(cfg)

	if err != nil {
		panic(err)
	}

	check := &api.AgentServiceCheck{
		HTTP:                           "http://192.168.31.172:8021/health",
		Timeout:                        "5s",
		Interval:                       "5s",
		DeregisterCriticalServiceAfter: "10s",
	}

	registration := new(api.AgentServiceRegistration)
	registration.Name = name
	registration.ID = id
	registration.Port = port
	registration.Tags = tags
	registration.Address = address
	registration.Check = check

	// 服务注册
	err = client.Agent().ServiceRegister(registration)
	if err != nil {
		panic(err)
	}
	return nil

}

func AllService() {
	cfg := api.DefaultConfig()
	// consul 的HTTP接口地址
	cfg.Address = "192.168.31.172:8500"

	client, err := api.NewClient(cfg)

	if err != nil {
		panic(err)
	}

	data, err := client.Agent().Services()

	if err != nil {
		panic(err)
	}

	for key, _ := range data {
		fmt.Println(key)
	}

}

func FilterService() {
	cfg := api.DefaultConfig()
	// consul 的HTTP接口地址
	cfg.Address = "192.168.31.172:8500"

	client, err := api.NewClient(cfg)

	if err != nil {
		panic(err)
	}

	data, err := client.Agent().ServicesWithFilter(fmt.Sprintf(`Service == "user_web"`))

	if err != nil {
		panic(err)
	}

	for key, _ := range data {
		fmt.Println(key)
	}

}

func main() {
	_ = Register("192.168.31.172", 8021, "user_web", []string{"web"}, "user_web")
	//AllService()
	//FilterService()
}

```

## GRPC 健康检查



## GRPC 注册 Consul 服务



## Gin 集成 Consul



## 动态端口发现

```go
package utils

import (
	"net"
)

func GetFreePort() (int, error) {
	addr, err := net.ResolveTCPAddr("tcp", "localhost:0")
	if err != nil {
		return 0, err
	}

	l, err := net.ListenTCP("tcp", addr)
	if err != nil {
		return 0, err

	}
	defer l.Close()
	return l.Addr().(*net.TCPAddr).Port, nil
}

```



## GRPC 负载均衡

- `grpc-consul-resolver` 

```go
package main

import (
	"context"
	"fmt"
	"gin_test/grpc_consul_resolver_test/proto"
	_ "github.com/mbobakov/grpc-consul-resolver" // It's important
	"google.golang.org/grpc"
	"log"
)

func main() {

	conn, err := grpc.Dial("consul://192.168.31.172:8500/user_srv?wait=14s&tag=srv", grpc.WithInsecure(), grpc.WithDefaultServiceConfig(`{"loadBalancingPolicy": "round_robin"}`))

	if err != nil {
		log.Fatal(err)
	}

	defer conn.Close()

	for i := 0; i < 10; i++ {
		userSrvClient := proto.NewUserClient(conn)

		resp, err := userSrvClient.GetUserList(context.Background(), &proto.PageInfo{Pn: 1, PSize: 2})

		if err != nil {
			panic(err)
		}
		for index, data := range resp.Data {
			fmt.Println(index, data)
		}
	}

}

```









