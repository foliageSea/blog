---
title: Go GRPC
date: 2024/02/20
permalinkPattern: go/1714839519000.html
tags:
  - go
categories:
  - go

---

## GRPC

### gRPC 快速上手

https://grpc.io/docs/languages/go/quickstart/

### protoc 工具

https://github.com/protocolbuffers/protobuf/releases

Go 安装协议编译插件

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1
```



### Protocol Buffers

官方文档: https://protobuf.dev/

proto 3 语言指南:

https://protobuf.dev/programming-guides/proto3/

```protobuf
syntax = "proto3";

option go_package = "./;proto";

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

生成 Go 文件

```bash
protoc --go_out=. --go-grpc_out=require_unimplemented_servers=false:. hello.proto
```



服务端代码

```go
package main

import (
    "context"
    "fmt"
    "google.golang.org/grpc"
    "grpc_demo/hello"
    "net"
)

type Server struct {
	hello.UnimplementedServerServer
}


func (s *Server)  SayHello(ctx context.Context,request *hello.HelloRequest)(*hello.HelloReply,error){
    return &hello.HelloReply{Message:"Hello "+request.Name},nil
}

func main()  {
    g := grpc.NewServer()
    s := Server{}
    hello.RegisterGreeterServer(g,&s)
    lis, err := net.Listen("tcp", fmt.Sprintf(":8080"))
    if err != nil {
        panic("failed to listen: "+err.Error())
    }
    g.Serve(lis)
}

```

客户端代码

```go
package main

import (
    "context"
    "fmt"
    "google.golang.org/grpc"
    "grpc_demo/proto"
)

func main()  {
    conn,err := grpc.Dial("127.0.0.1:8080",grpc.WithInsecure())
    if err!=nil{
        panic(err)
    }
    defer conn.Close()
    c := hello.NewGreeterClient(conn)
    r,err := c.SayHello(context.Background(),&hello.HelloRequest{Name:"bobby"})
    if err!=nil{
        panic(err)
    }
    fmt.Println(r.Message)
}

```



### GRPC 的4种数据流

- 服务端单向流
- 客户端单向流
- 