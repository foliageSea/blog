---
title: ZSH指南
date: 2024/02/14
tags:
  - mac
categories:
  - mac
---

### 安装 ZSH

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

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 安装 zsh-autosuggestions 插件

```bash
git clone https://gitee.com/hailin_cool/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

### 添加配置 .zshrc

```bash
source $ZSH_CUSTOM/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
```

### 更新配置

```bash
source ~/.zshrc
```

