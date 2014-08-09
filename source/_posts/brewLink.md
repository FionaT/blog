title: OS X 下brew link 的时候的权限问题
date: 2014-04-24 11:13:22
tags: brew osx
category: osx
---
系统是OS X 10.9.2，osx在brew link的时候总是会遇到权限问题，
会提示权限不足，但是brew又不能sudo，
今天安装ffmpeg又遇到了这个问题，
在网上找到了解决方法

<!--more-->

今天想要用github上的一个图形处理的开源库
所以需要安装opencv，但是卡在

```
brew install ffmpeg
```
这一步，因为总是提示需要我
```
brew link yasm
```
但是执行brew link yasm的时候又会提示

```
Error: Could not symlink file: /xxxxx is not writable. You should change its permissions.
```

brew遇到permission的问题sudo是不可以的，因为brew不可以和sudo一起用

后来在http://superuser.com/questions/435442/symlink-error-when-installing-mysql-via-homebrew 
找到solution，就是在terminal输入
```
sudo chown -R $(whoami) /usr/local/include
```

然后再brew link即可

好像不仅仅是yasm，其他依赖在brew link出现问题的时候都可以用这一条命令来解决

