title: npm 安装
date: 2013-10-16 10:56:08
tags: Hexo
category: Hexo
---

想要把hexo blog放到服务器上去的时候要先安装npm
然后就一直报错


输入命令

```
curl -k https://npmjs.org/install.sh | sh
```
<!--more-->
会提示

```
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
101  7882  101  7882    0     0   6586      0  0:00:01  0:00:01 --:--:-- 31402
npm cannot be installed without nodejs.
Install node first, and then try again.

Maybe node is installed, but not in the PATH?
Note that running as sudo can change envs.

PATH=/sbin:/bin:/usr/sbin:/usr/bin
```

于是我就加了sudo

```
sudo curl -k https://npmjs.org/install.sh | sh
```

提示

```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
101  7882  101  7882    0     0   2446      0  0:00:03  0:00:03 --:--:--  6465
tar=/bin/tar
version:
tar (GNU tar) 1.23
Copyright (C) 2010 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by John Gilmore and Jay Fenlason.
install npm@1.1
fetching: http://registry.npmjs.org/npm/-/npm-1.1.71.tgz
0.6.10
1.1.71
cleanup prefix=/usr/local

All clean!
npm ERR! Error: EACCES, permission denied '/usr/local/bin/npm'
npm ERR!  { [Error: EACCES, permission denied '/usr/local/bin/npm'] errno: 3, code: 'EACCES', path: '/usr/local/bin/npm' }
npm ERR! 
npm ERR! Please try running this command again as root/Administrator.

npm ERR! System Linux 2.6.32-358.2.1.el6.x86_64
npm ERR! command "/usr/local/bin/node" "/tmp/npm.12598/package/cli.js" "rm" "npm" "-gf"
npm ERR! cwd /tmp/npm.12598/package
npm ERR! node -v v0.6.10
npm ERR! npm -v 1.1.71
npm ERR! path /usr/local/bin/npm
npm ERR! code EACCES
npm ERR! errno 3
npm ERR! stack Error: EACCES, permission denied '/usr/local/bin/npm'
npm ERR! 
npm ERR! Additional logging details can be found in:
npm ERR!     /tmp/npm.12598/package/npm-debug.log
npm ERR! not ok code undefined
npm ERR! not ok code 3
```

我就control＋c了
然后输入

```
curl http://npmjs.org/install.sh | sudo npm_debug=1 clean=no PATH=$PATH sh
```

报错

```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0    85    0    85    0     0    153      0 --:--:-- --:--:-- --:--:--   342
sh: line 1: syntax error near unexpected token `newline'
sh: line 1: `<html>Moved: <a href="https://npmjs.org/install.sh">https://npmjs.org/install.sh</a>'
```

最后输入

```
sudo curl https://npmjs.org/install.sh | sudo npm_debug=1 clean=no PATH=$PATH sh
```

就ok了

我想问题是出在上面url地址https协议与http协议的不同
以及node.js的PATH npm没找到，所以要写一下PATH=$PATH sh



PS：有时也许输入

```
sudo curl https://npmjs.org/install.sh | sudo npm_debug=1 clean=no PATH=$PATH sh
```
来解决的时候，会出现用curl无法成功下载install.sh文件的问题，报错内容
```
Fiona:~ Fiona$ sudo curl https://npmjs.org/install.sh | sudo npm_debug=1 clean=no PATH=$PATH sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100   184  100   184    0     0     79      0  0:00:02  0:00:02 --:--:--    79
sh: line 1: html: No such file or directory
sh: line 2: syntax error near unexpected token `<'
'h: line 2: `<head><title>301 Moved Permanently</title></head>
```

这时用浏览器直接进入https://npmjs.org/install.sh 网址来下载
然后再运行sh文件即可
