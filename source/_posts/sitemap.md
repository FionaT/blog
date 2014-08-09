title: ｜Hexo优化｜如何向google提交sitemap（详细）
date: 2013-10-23 20:38:03
tags: Hexo
category: Hexo
---

Sitemap 可方便管理员通知搜索引擎他们网站上有哪些可供抓取的网页。
向google提交自己hexo博客的sitemap
有助于让别人更好地通过google搜索到自己的博客
下面来说一下具体步骤

<!--more-->

**第一步 生成自己的sitemap文件**

进入博客目录下，打开_config.yml文件，在最后一行添加如下代码
```
plugins: - hexo-generator-sitemap
```

在终端输入代码
```
hexo g
hexo d
```
重新部署代码（部署到github服务器的情况）
然后在浏览器输入 你的域名／sitemap.xml
例如：http://fionat.github.io/blog/sitemap.xml
就能看到生成的xml文件


**第二步 向google提交你的网页**

用自己的google帐号登陆Webmaster Central的网页
https://www.google.com/webmasters/verification/home?hl=en
点击ADD A SITE
输入网页url点击continue
![img0](http://i.minus.com/im0BNAq1ZCCyd.png)


**第三步 google验证网页所有权**

进入验证所有权的页面
可以选择上传一个html文件到你的网页的方式来验证
如下图
![img1](http://i.minus.com/iyRRPF62Wsy7w.png)

也可以选择其他方法也就是alternate methods
我选择的就是其他方法里面的html tag
如下图 
![img2](http://i.minus.com/icXP7xZnYAHGq.png)
大致的意思就是在主页的head里面加一条meta标签
在自己的主页加了google指定的meta标签以后
回来此页点击verify按钮即完成验证


**第四步 google网站站长上传sitemap**

点击以下链接
https://www.google.com/webmasters/tools
由于之前在第2步已经向google提交了你的网页
所以这里能看到自己网页的缩略图
![img3](http://i.minus.com/ixi8QhjjiZXfK.png)

这里直接点击红色框的部分
就会进入site dashboard
如图所示 
![img4](http://i.minus.com/ivlnhb6nHyHOr.png)

点击sitemap这一项
进入后点击ADD/TEST SITEMAP这个按钮
然后输入你的sitemap.xml的link
按submit sitemap按钮即可
![img5](http://i.minus.com/iJA9X4Zv2HakX.png)

依照我的经验，等了一天左右再进入这个页面
下面就会告诉你有多少个url被indexed了
大功告成
![img6](http://i.minus.com/imxB0pcHpZGzH.png)

