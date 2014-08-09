title: Java7升级导致网页报错
date: 2013-11-28 15:42:36
tags: Java
category: Java
---

如果电脑里面安装的java是7版本的，
在访问一些网站的时候可能会报错.
```
sun.security.validator.ValidatorException: PKIX path validation failed:
java.security.cert.CertPathValidatorException: algorithm check failed: MD2withRSA disabled
```
这是由于新版的jre7认为MD2, RSA 算法不安全所以限制了它们
<!--more-->

**解决方法——修改jre7的security文件**

进入
```
 C:\Program Files\Java\jre7\lib\security 
```
这个文件目录，用编辑器打开java.security文件
找到这句代码
```
jdk.certpath.disabledAlgorithms=MD2, RSA keySize < 1024
```
把它注释了，然后重新打开网页即可

使用完这个网站以后，最好把这句代码取消注释

可以在这个网站看sln
http://www.meritagesolutions.net/CertificateException%3A-Certificate-does-not-conform-to-algorithm-constraints
