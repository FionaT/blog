title: PyQt4中文乱码问题
date: 2014-04-24 10:14:06
tags: PyQt
category: PyQt
---
在Linux下写一个GUI程序的时候使用PyQt4，
然后在显示中文的时候出现了乱码的问题，
即使在文件头加了#coding:utf-8也没有用，
其实解决方法十分简单。

<!--more-->

##中文乱码解决
比如说是一个设置窗口title的函数

```
self.setWindowTitle("我的窗口小标题")
```
这样写时会出现中文乱码
网上搜索答案的时候说是编码格式不兼容
在py文件最前面加上
```
#coding:utf-8
```
据说就可以解决

但是在我这里失灵了
后来我发现只要用QtCore.QString再去包装一下中文字符就可以
像这样写就没有问题了，注意那个小小的u噢
```
self.setWindowTitle(QtCore.QString(u"我的窗口小标题"))
```