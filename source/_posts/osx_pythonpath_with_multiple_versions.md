title: Python's multiple versions' path in OSX
date: 2014-08-09 12:41:06
tags: Python osx PYHONPATH
category: Python
---

There are at lease 3 versions of Python in my computer, the defaule python2.7 provided by OSX is the first one, and the python2.7 and python3.3 installed by homebrew are another two versions. The result is that I am always confused by my multiply python versions, especially when I want to link them with my IDE or add some useful site-packages.

<!--more-->

##1. Find out PYTHONPATH
PYTHONPATH is an environment variable, much like PATH and it tells the terminal that which Python it should run when you type 'python' in terminal. And in OSX PYTHONPATH is saved in .profile file. 

There are 3 ways to find your python's path:

###1)  Use vim to see your .profile file 
```
Fiona:~ Fiona$ vim ~/.profile
```

and you can see something similar as the following lines
	
```
export PYTHONPATH=/usr/local/lib/python2.7/site-packages:$PYTHONPATH

PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"
export PATH
```

we can get that the python path is `/usr/local/lib/python2.7/site-packages`
	


###2)  Type which python in the terminal

```
Fiona:~ Fiona$ which python
```

and it will return 
```
/Library/Frameworks/Python.framework/Versions/2.7/bin/python
```
which shows the path of the python unix execute file


###3)  Run the following code in python
we can also figure out python's path in the python IDLE by the following code.

```
import os
try:
    user_paths = os.environ['PYTHONPATH'].split(os.pathsep)
except KeyError:
    user_paths = []

print user_paths    
```

and the it will probably print 
```
/usr/local/lib/python2.7/site-packages
```


##2. Find the OSX system's Python 
From the above passage, we can see that one version of python is located in `/usr/local/lib/python2.7`, and I guess that the OSX system's Python is probably in `usr/lib/`. So I cd into `/usr/lib/` and find Python2.5 Python2.6 and Python2.7 here. 

What is more, the Python2.5 Python2.6 and Python2.7 files here are all substitutes. Take Python2.7 for example, the Python2.7 in `/usr/lib/` points to 
`/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7`.

So the Python (provided by OSX system)is indeed in 
`/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7`
and its substitute is in `/usr/lib/`.


On the other hand, the Python (installed by user) is in 
`/Library/Frameworks/Python.framework/Versions`. 
I cd into the path I find Python2.7 and Python3.3 here.


##3. Find out different versions' Python's site-packages folder
Then I explore there folders and finally find out that the python(installed by user) 's site-packages folder locates in `Library/Python/2.7/site-packages`, and you can replace 2.7 with any another version number that u have alreay installed such as 2.6.

On the other hand, the python (provided by OSX system) 's site-packages folder locates in
`/usr/local/lib/python2.7/site-packages`.

After figuring out these different versions Python's site-package's path, we can manage their libraries better. For example we can uninstall some libraries by deleteing their folders such as what we do in windows.