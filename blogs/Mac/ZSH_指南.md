---
title: ZSH 指南
date: 2024/02/20
permalinkPattern: mac/1714839567000.html
tags:
  - mac
categories:
  - mac
---

### 安装 ZSH

- 请先确保安装 `HomeBrew`

```bash
sudo brew install zsh
```

### 查看系统可用的 SHELL

```bash
cat /etc/shells
```

### 设置系统默认的 SHELL 为 ZSH

```bash
chsh -s /bin/zsh
```

### 查看系统默认的 SHELL

```bash
echo $SHELL
```

### 安装 oh-my-zsh

- `oh-my-zsh` 的作用美化终端
- 建议开启终端代理

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 安装 zsh-autosuggestions 插件 (推荐)

- 作用: 提供命令行历史记录, 通过右箭头补充命令行

```bash
git clone https://gitee.com/hailin_cool/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

### 添加配置到 `.zshrc`

```bash
source $ZSH_CUSTOM/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
```

### 更新配置

```bash
source ~/.zshrc
```

