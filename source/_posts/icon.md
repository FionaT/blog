title: ｜Hexo优化｜博文icon美化和网页icon
date: 2013-10-23 15:43:03
tags: Hexo
category: Hexo
---

下面我想介绍修改hexo中一些icon细节的方法
**第一种是修改每篇blog文章标题左边的icon**
**第二种是增加blog的网页icon，也就是那个显示浏览器标签页上的icon**

**下面先说第一种**
-------------

刚开始的时候看左边那个蓝色的页面icon觉得不是很喜欢，而且太多人一样了
所以就想改掉
<!--more-->
![原来的样子](http://i.minus.com/ikslq8Y8jObhu.png)

方法和过程很简单

先进入theme－>light->layout->_partial文件夹
打开article.ejs文件
看到第7行开始的

```
<% if (item.layout != 'page'){ %>
	<div class='icon'>
    </div>
```
修改成以下代码

```
<% if (item.layout != 'page'){ %>
        <div class="myicon">
          <img src="<%- config.root %>img/myicon.png" width="30" height="30">
        </div>
```

然后在把myicon.png文件放到theme－>light->source文件目录下新建一个img文件夹
把你的icon图片myicon.png放到这个img文件夹内。当然别的文件格式也完全没有问题。

![路径](http://i.minus.com/iblUOhlaiS9GK5.png)

这时的效果如图所示

![效果](http://i.minus.com/ibr4nWCLS2K4hO.png)

因为我发现这个icon的位置和原来不同了所以就想做一些css上面的调整
于是我在theme－>light->source－>css的文件夹内新建了一个css文件，命名为private_style.css
写入以下内容
```
.myicon{
	position:  relative;
	right: 40px;
	top: 40px;
}
```

然后在theme－>light->layout->_partial文件夹内的head.ejs文件打开
在最末尾的<%- partial('google_analytics') %>这一句话前面加上
```
 <link rel="stylesheet" href="<%- config.root %>css/private_style.css" media="screen" type="text/css">
```

结果如下

```
  <link rel="alternate" href="<% if (theme.rss){ %><%- theme.rss %><% } else { %><%- config.root %>atom.xml<% } %>" title="<%= config.title %>" type="application/atom+xml">
  <link rel="stylesheet" href="<%- config.root %>css/style.css" media="screen" type="text/css">
  <link rel="stylesheet" href="<%- config.root %>css/private_style.css" media="screen" type="text/css">
  <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  <%- partial('google_analytics') %>
</head>
```

然后再次generate后打开server的效果如下

![效果](http://i.minus.com/imvh5kkGjn1EJ.png)


**第二种添加网页icon**
-------------

在themes－>light－>layout－>_partial文件夹里面
打开head.ejs文件
把
```
<link href="<%- config.root %>favicon.png" rel="icon">
```
修改成
```
<link href="<%- config.root %>img/myicon.ico" rel="icon" type="image/x-ico">
```
将myicon.ico图标文件放在theme－>light->source->img文件夹里即可



