---
layout: narrative
title: "Python installation"
author: sawangpong
editor: Sawangpong muadphet
rights: Public Domain
source: Project Guttenberg
publication-date: 2018
toc:
- for windows
- for mac os
- for linux
---

## การติดตั้ง
ภาษาpython สามารถติดตั้งการใช้งานได้ทุก platform แล้วแต่ความถนัดของนักพัฒนา ผู้เรียนจะต้องทำการติดตั้ง python ให้เหมาะสมกับการใช้งานดังนี้

## for windows
- ให้เปิด browser ไปยัง [www.python.org](https://www.python.org/) ไปยังเมนู Download
เพื่อ ทำการ download python 3.6.4
![python page](../../assets/images/pythonpage.png)
- ให้ทำการติดตั้ง ตัว installer 64bit ที่ทำการ download มา
![python page](../../assets/images/python_installer.png)
- เลือกการติดตั้งสำหรับ "Install for all users" แล้วกด next
- เลือก Default PATH
![python page](../../assets/images/python_installer_run.png)
- เปิด windows terminal และทำการ ทดสอบ import os, sys ดังรูป
![python page](../../assets/images/window_terminal.png)
<hr>
## for mac os
- สามารถติดตั้งผ่าน brew โดยให้เปิด terminal แล้วสั่งคำสั่ง

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- จากนั้นให้เพิ่ม ค่าตั้งแปร PATH ใน file ~./profile
```
export PATH=/usr/local/bin:/usr/local/sbin:$PATH
```
- เมื่อเสร็จเรียบร้อยให้ทำการติดตั้ง python3 ด้วยคำสั่ง
```
brew install python3
```
- เปิด mac terminal
![python page](../../assets/images/mac_terminal.png)

<hr>
## for linux
ubuntu
```
# apt update && apt upgrade
# add-apt-repository ppa:jonathonf/python-3.6
# apt install python3.6
# python3 -v
```


{% highlight python %}
x = ('a', 1, False)
{% endhighlight %}
