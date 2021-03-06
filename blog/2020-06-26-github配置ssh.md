---
id: ssh
title: 使用 SSH 来连接到 GitHub
author: 
author_title: 
author_url: 
author_image_url: 
tags: [ ssh, github ]
---


### 使用 SSH 来连接到 GitHub

#### 生成一个新的SSH key

1. 打开Git Bash，输入以下命令：

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
>此处需要你填写的邮箱，只是作为SSH key的一个名字，实质上没有任何作用。

2. 命令行提示你输入SSH key文件地址：

```bash
Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
```
>直接回车确认即可。

3. 命令行提示你输入密码：

```bash
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```
>此处的密码意味着以后需要使用此SSH key时，你都必须输入密码来使用，因此一般不设置，直接回车即可。

#### 将SSH key添加进ssh-agent

ssh-agent 是用于管理SSH 私钥的长时间持续运行的守护进程（daemon）. 唯一目的就是对解密的私钥进行高速缓存。

1. 首先确保ssh-agent已经启动

```bash
eval $(ssh-agent -s)
```

2. 添加SSH key

```bash
ssh-add ~/.ssh/id_rsa
```

#### 将SSH 公钥添加进Github

1. 拷贝公钥

```bash
clip < ~/.ssh/id_rsa.pub
pbcopy < ~/.ssh/id_rsa.pub //mac下拷贝
```

2. 登陆Github，进入Settings, 选择SSH and GPG keys，选择New SSH key or Add SSH key，然后将公钥复制到输入框中，并命名为电脑的主机名。至此，ssh设置就成功了。


