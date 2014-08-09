title: goagentX 连接问题解决
date: 2013-10-16 1:08:45
tags:
category: goagentX
---
```
	SSLError: [Errno 8] _ssl.c:503: EOF occurred in violation of protocol
```
突然之间goagentX无法翻墙，点击右上角的黑色logo，然后点击显示主窗口就看到以上报错
折腾了一下，发现可能是openssl没装好以及CA证书过期了
<!--more-->

其实真正的原因应该是证书过期，openssl的问题也有报过warning

系统：OS X 10.8.5

1. 证书过期

   证书过期，重新下载一个然后导入就好了
   我不知道哪里可以只下载CA.crt就又下载了一个goagent的包
   下载地址戳这里 [goagent](http://code.google.com/p/goagent/)
   下载完成后解压，点开local文件夹，就能看到CA.crt

   然后打开实用工具
   点击钥匙串访问
   ![step1](http://i.minus.com/iPLiMemoAwpoE.png)
   点击左边的系统－>点击左边的证书
   点击左下脚的小＋号
   ![step2](http://i.minus.com/i3S4Yic1Amq0D.png)
   然后找到goagent中local里面的CA.crt
   点击打开即可
   ![step3](http://i.minus.com/i00ASLP3lRJSB.png)


2. openssl安装

   一句命令就可以啦

```
wget http://pypi.python.org/packages/source/p/pyOpenSSL/pyOpenSSL-0.13.tar.gz && tar zxvf pyOpenSSL-0.13.tar.gz && cd pyOpenSSL-0.13 && sudo python3 setup.py install

```