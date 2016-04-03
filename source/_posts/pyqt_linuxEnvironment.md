title: 在Linux下配置PyQt4开发环境
date: 2014-04-21 16:41:06
tags: PyQt
category: PyQt
---
虽然PyQt是跨平台的，但是为了确保Linux的100%兼容性，
把之前在mac下开发的PyQt4项目移入Linux系统。
在Linux下配置PyQt4开发环境，其中包括安装依赖关系，PyQt，Eclipse，
以及在Eclipse中配置python开发环境。

<!--more-->

##sip编译和安装
安装PyQt4前需要先安装sip。从网络上下载压缩包解压，运行命令
```
sudo python configure.py
make
sudo make install
```

##安装依赖的库
```
sudo apt-get install libxext6 libxext-dev libqt4-dev libqt4-gui libqt4-sql qt4-dev-tools qt4-doc qt4-designer qt4-qtconfig
```

##PyQt4的编译和安装
下载压缩包解压
```
sudo python configure.py
sudo make
sudo make install
```

##Eclipse安装
下载安装包解压


##PyDev安装
用eclipse自带的install new software安装，配置一下python的路径。
