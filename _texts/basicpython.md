---
layout: narrative
title: "Basic Python3"
author: sawangpong
editor: Sawangpong muadphet
rights:
source:
publication-date: 2018
toc:
- hello world
- Variables and Types
---

## hello world
ภาษาpython สามารถทำงานได้ทันทีโดยไม่ต้องมีการ compile ยกตัวอย่างการใช้งานคำสั่ง print() เพื่อส่งข้อความออกแสดงผลทางหน้าจอ

```
$ python3
Python 3.6.3 (default, Oct  3 2017, 21:45:48)
[GCC 7.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("hello world")
hello world
>>>
```
#### indentation
เนื่องจากภาษาไพทอน ไม่มีการใช้ {} เพื่อแสดง code block แต่จะมีการใช้ ย่อหน้า indentation โดยทั่วไปจะตั้งไว้ 4 spaces

```
x = 1
if x == 1:
    # indented four spaces
    print("x is 1.")
```
## Variables and Types
ภาษาpython เป็นภาษาเชิง object oriented และเป็น Dynamic Type โดยไม่จำเป็นต้องมีการประกาศชนิดของตัวแปรเอาไว้ก่อน เพราะทุกๆ ตัวแปรของ python เป็น object

#### Integer
```
myint = 7
print(myint)
```
#### floating
```
myfloat = 7.0
print(myfloat)
myfloat = float(7)
print(myfloat)
```

#### String
```
mystring = 'hello'
print(mystring)
mystring = "hello"
print(mystring)
```
#### operator +
```
one = 1
two = 2
three = one + two
print(three)

hello = "hello"
world = "world"
helloworld = hello + " " + world
print(helloworld)
```

#### assignment
การใช้การ assignment สามารถใช้งาน กำหนดได้มากกว่าครั้งละ 1 ตัวแปร และจะใช้ตำแหน่งในการกำหนดค่า
```
a, b = 3, 4
print(a,b)
```
