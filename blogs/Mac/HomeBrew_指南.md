---
title: HomeBrew 指南
date: 2024/02/20
permalinkPattern: mac/2024022001.html
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

###  安装 HomeBrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 配置国内镜像源

- 如果使用 `zsh` Shell, 修改 `~/.zshrc` 添加一下配置
```bash
# HomeBrew 镜像源
export HOMEBREW_API_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_PIP_INDEX_URL="https://pypi.tuna.tsinghua.edu.cn/simple"
```

- 修改生效
```bash
source ~/.zshrc
```





