---
layout: narrative
title: "Object Oriented "
author: sawangpong
editor: Sawangpong muadphet
rights:
source:
publication-date: 2018
toc:
- Object Oriented programming
- Inheritance
- Instance, class, Static Methods
- multiple Inheritance
- decorator
---

## Object Oriented programming
ใน ภาษา python ทุกอย่างเป็น object โดย ในภาษา python จะนำเอา code ไปเขียนไว้ในรูปแบบของ class แนวคิดของ OOP ประกอบด้วย

- Abstraction
- Polymorphism
- encapsulation
- Inheritance

#### python object
ทดสอบ ชนิดของ object ด้วยคำสั่ง
```
import sys

def function():
    pass

print(type(1))
print(type(""))
print(type([]))
print(type({}))
print(type(()))
print(type(object))
print(type(function))
print(type(sys))
```

```
class First():
    def demo_method():
       print("Demo")

fr = First()

print(type(fr))
print(type(First))
```
ตรวจสอบ
```
print(dir(First))

['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '_
_init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__
', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'demo_method']

print(dir(fr))
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '_
_init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__
', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'demo_method']
```

เรียกฟังก์ชั่น
```
fr.demo_method()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: demo_method() takes 0 positional arguments but 1 was given
```

พิจารณา error ว่า มีสามารถรับค่าค่า แต่ว่ามีการส่ง ตัวแปรมาให้ 1 ตัว ดังนั้นต้องมีการกำหนดค่า ใหม่ให้แก่ ฟังก์ชั่น
```
class First():
    def demo_method(self):
       print("Demo")
       print(id(self))

my_object = First()
print(id(my_object))
my_object.demo_method()
```

#### attributes
attribute เป็นคุณสมบติ ของ object จะถูก set ค่าใน ``___init__()`` ถูกเรียกอัตโนมัติ เมื่อมีการสร้าง object
```
class Cat():

    def __init__(self, name):

        self.name = name

missy = Cat('Missy')
lucky = Cat('Lucky')

print(missy.name)
print(lucky.name)
```

#### __init__ และ __new__
ในกระบวนการสร้าง object จะมีการเรียกใช้งานทั้งสอง ฟังก์ชั้น ลองทดสอบ code ดังต่อไปนี้
```
class Sample(object):
    def __new__(cls, *args, **kargs):
        print("Creating instance of Sample")
        instance = super(Sample, cls).__new__(cls)
        print('Instance returned by __new__ - {}'.format(instance))
        return instance
    def __init__(self):
        print("Initiating instance of Sample")

s = Sample()
Creating instance of Sample
Instance returned by __new__ - <__main__.Sample object at 0x7efe87906a20>
Initiating instance of Sample
```

```
class Student:
    def __init__(self, name, student_number):
        self.name = name
        self.student_number = student_number
        self.classes = []

    def enrol(self, course_running):
        self.classes.append(course_running)
        course_running.add_student(self)


class Department:
    def __init__(self, name, department_code):
        self.name = name
        self.department_code = department_code
        self.courses = {}

    def add_course(self, description, course_code, credits):
        self.courses[course_code] = Course(description, course_code, credits, self)
        return self.courses[course_code]


class Course:
    def __init__(self, description, course_code, credits, department):
        self.description = description
        self.course_code = course_code
        self.credits = credits
        self.department = department
        self.department.add_course(self)

        self.runnings = []

    def add_running(self, year):
        self.runnings.append(CourseRunning(self, year))
        return self.runnings[-1]


class CourseRunning:
    def __init__(self, course, year):
        self.course = course
        self.year = year
        self.students = []

    def add_student(self, student):
        self.students.append(student)


maths_dept = Department("Mathematics and Applied Mathematics", "MAM")
mam1000w = maths_dept.add_course("Mathematics 1000", "MAM1000W", 1)
mam1000w_2013 = mam1000w.add_running(2013)

bob = Student("Bob", "Smith")
bob.enrol(mam1000w_2013)

```
- class จะทำหน้าที่ encapsulate properties
- def __init__ ทำหน้าที่เป็น constructor
- self จะทำหน้าที่เป็น reference ไปยัง instance ทำให้ทราบว่า function ที่ดำเนินการอยู่นั้นอยู่ใน instance ใด

## Inheritance
เป็น วิธีการจัดการ objects ในรูปแบบของลำดับชั้น โดย object จะ มีการถ่ายทอดคุณสมบัติ จาก object อื่นได้

```
class Person:
    def __init__(self, name, surname, number):
        self.name = name
        self.surname = surname
        self.number = number


class Student(Person):
    UNDERGRADUATE, POSTGRADUATE = range(2)

    def __init__(self, student_type, *args, **kwargs):
        self.student_type = student_type
        self.classes = []
        super(Student, self).__init__(*args, **kwargs)

    def enrol(self, course):
        self.classes.append(course)


class StaffMember(Person):
    PERMANENT, TEMPORARY = range(2)

    def __init__(self, employment_type, *args, **kwargs):
        self.employment_type = employment_type
        super(StaffMember, self).__init__(*args, **kwargs)


class Lecturer(StaffMember):
    def __init__(self, *args, **kwargs):
        self.courses_taught = []
        super(Lecturer, self).__init__(*args, **kwargs)

    def assign_teaching(self, course):
        self.courses_taught.append(course)


jane = Student(Student.POSTGRADUATE, "Jane", "Smith", "SMTJNX045")
jane.enrol(a_postgrad_course)

bob = Lecturer(StaffMember.PERMANENT, "Bob", "Jones", "123456789")
bob.assign_teaching(an_undergrad_course)
```

จากตัวอย่าง base class คือ Person ที่มีข้อมูลของบุคคล ของ Staff และ Lectuere
- เราใช้ __init__ ของ base class จะทำหน้าที่ initial ค่าของ instance variable ด้วยการเรียก ``super(Student, self).__init__(*args, **kwargs)``
- ส่วน class ลูกแต่ละ class ก็จำทำการกำหนด attribute type เพื่อแยกประเภท

## Instance, class, Static Methods
- instance method  เป็นการประกาศ method ของ class ปรกติ เป็นพื้นฐานของ การสร้าง class โดยจะประกาศด้วย ``def functionname(self):``
และมี argument ชื่อว่า ``self`` เพื่ออ้างอิงกับ instance ใช้สำหรับการกำหนด attribute (object's state) และสามารถที่จะเข้าถึง class's state ได้ด้วยโดยผ่าน ``self.__class__``
- class method โดยต้องใช้ decorator ชื่อ @classmethod และแทนที่จะรับตัวแปรชื่อ self ก็จะเปลี่ยนเป็น  cls เพื่อชี้ไปยัง class แทนที่จะชื่้ไปยัง  object
- static method โดยต้องใช้ decorator ชื่อ @staticmethod เป็นฟังก์ชั่นที่ไม่ต้อง self, cls

```
class MyClass:
    def method(self):
        return 'instance method called', self

    @classmethod
    def classmethod(cls):
        return 'class method called', cls

    @staticmethod
    def staticmethod():
        return 'static method called'
```

่ทดสอบ code ดังนี้

```
obj = MyClass()
obj.method()
('instance method called', <__main__.MyClass object at 0x7efe8aaf67f0>)

MyClass.method(obj)
('instance method called', <__main__.MyClass object at 0x7efe8aaf67f0>)

MyClass.method()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: method() missing 1 required positional argument: 'self'
```

เมื่อมีการเรียก function method ขึ้นมา  python จะแทนค่าของ self ด้วย instance ของ object เราสามารถส่งค่า object ไปยัง function โดยตรงเช่นเดียวกัน โดยไม่ต้องใช้ format  ``obj.method()``
- Instance method สามารถเข้าถึง instance state
- Instance method สามารถเข้าถึง class state

```
obj.classmethod()
('class method called', <class '__main__.MyClass'>)
```
- class method ไม่สามารถเปลี่ยนแปลงสถานะของ instance state
- classmethod() จะเข้าถึงได้เพียง class method เท่านั้น python ส่ง class ไปยัง first argument ไปยัง fuction


```
obj.staticmethod()
'static method called'
```
- static method ไม่สามารถเปลี่ยนแปลงสถานะของ instance state
- static method ไม่สามารถเปลี่ยนแปลงสถานะของ class state

ตัวอย่าง
```
class Pizza:
    def __init__(self, ingredients):
        self.ingredients = ingredients
    def __repr__(self):
        return f'Pizza({self.ingredients!r})'

Pizza(['cheese', 'tomatoes'])
Pizza(['cheese', 'tomatoes'])

```

จากตัวอย่างด้านบน เราสามารถใช้งาน classmethod
```
class Pizza:
    def __init__(self, ingredients):
        self.ingredients = ingredients

    def __repr__(self):
        return f'Pizza({self.ingredients!r})'

    @classmethod
    def margherita(cls):
        return cls(['mozzarella', 'tomatoes'])

    @classmethod
    def prosciutto(cls):
    return cls(['mozzarella', 'tomatoes', 'ham'])
```

เมื่อมีการเรียกใช้ class method จะ objects และมีการเรียกใช้ __init__ แบบinternal
```
Pizza.margherita()
Pizza(['mozzarella', 'tomatoes'])

Pizza.prosciutto()
Pizza(['mozzarella', 'tomatoes', 'ham'])
```

#### การเรียกใช้ static
ต้องการที่ให้มีการคำนวนค่าต่างๆ ที่ตอ้งการ แต่จะไม่มีการกระทบกับ instance และ class ส่วนมากนำมาสร้างเป็น utility function มากกว่า
```
import math

class Pizza:
    def __init__(self, radius, ingredients):
        self.radius = radius
        self.ingredients = ingredients
    def __repr__(self):
        return (f'Pizza({self.radius!r}, 'f'{self.ingredients!r})')
    def area(self):
        return self.circle_area(self.radius)
    @staticmethod
    def circle_area(r):
        return r ** 2 * math.pi
```

่่ทดสอบ
```
p = Pizza(4, ['mozzarella', 'tomatoes'])
p
Pizza(4, ['mozzarella', 'tomatoes'])
p.area()
50.26548245743669
Pizza.circle_area(4)
50.26548245743669
```

## multiple Inheritance
ใน python สามารถนิยาม class โดยที่เป็น subclass ได้มากกว่า 1 class เช่น
```
class SubclassName(BaseClass1, BaseClass2, BaseClass3, ...):
    pass
```

![multiple_inheritance.png](../../assets/images/multiple_inheritance.png)



## decorator
ที่ผ่านมาเราได้เป็น decorator สองตัว คือ @classmethod, @staticmethod code ตัวอย่างด้านล่างจะมี ความหมายเหมือนกัน จะเห็นว่าสามารถที่จะอ่านและทำความเข้าใจได้ง่ายกว่า

```
def foo(self):
    perform method operation
foo = classmethod(foo)


@classmethod
def foo(self):
    perform method operation
```

เพื่อที่จะทำให้เราเข้าใจ decorator ได้อย่างชัดเจน ของให้เราทำความเข้าใจ fuctions ในภาษา python ให้มีชัดเจน เพิ่มเติม ดังนี้
- 1 ฟังก์ชันสามารถ assign ให้กับ variable ได้

```
def greet(name):
    return "hello "+name

greet_someone = greet
print(greet_someone("John"))
```

- 2 สามารถ สร้าง function ซ้อนเข้าไปใน function ได้

```
def greet(name):
    def get_message():
        return "Hello "
    result = get_message()+name
    return result

print(greet("John"))
```

- 3 สามารถ ส่ง function ไปยัง function ในฐานะของการเป็น  parameter

```
def greet(name):
   return "Hello " + name

def call_func(func):
   other_name = "John"
   return func(other_name)

print(call_func(greet))
```

ส่ง function ไปยัง call_func(greet)  ในรูปแบบที่เป็น object ไม่มี เครื่องหมาย ``()`` แสดงว่ายังไม่การ execute ส่วนการ execte จะเกิดที่
``return func(other_name)``

- 4 function สามารถที่ คืนค่ากลับมาเป็น ฟังก์ชั่นได้

```
def compose_greet_func():
    def get_message():
        return "Hello there!"
    return get_message

greet = compose_greet_func()
print(greet())

```

ฟังก์ที่มีการ return ออกมา ยังคงสามารถที่จะเข้าถึงตัวแปร ที่ส่งเข้าไปได้ เนื่องจากใน python มีความสามารถที่เรียกว่า closures (PEP 227)
จากหลักการที่ว่า nested function คือฟังก์ชั่น ที่กำหนดใน function อื่น ยังคงมีความสามารถในการเข้าถึง ค่าของ ตัวแปรที่อยู่ใน enclosing scope
ตัวอย่าง code ของ clourse

```
def transmit_to_space(message):
    "This is the enclosing function"
    def data_transmitter():
        "The nested function"
        print(message)
    data_transmitter()

print(transmit_to_space("Test message"))
```
หรือสามารถเขียนได้อีกแบบดังนี้
```
def transmit_to_space(message):
    "This is the enclosing function"
    def data_transmitter():
        "The nested function"
        print(message)
    return data_transmitter

data = transmit_to_space("Test message")
data()
```

ดังนั้น เราสามารถนิยาม Decorator ได้ว่า
function decorator คือ ฟังก์ชั่นที่ นำไปห่อหุ่ม function ที่มีอยู่แล้ว เพื่อทำหน้าที่เพิ่มความสามารถ ตามที่ต้องการไป จากตัวอย่างด้านล่างนี้ เราใช้ decorator เพิ่ม p tag ให้แก่ function

```
def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)

def p_decorate(func):
   def func_wrapper(name):
       return "<p>{0}</p>".format(func(name))
   return func_wrapper

my_get_text = p_decorate(get_text)

print(my_get_text("John"))
```

เพื่อให้สามารถที่จะอ่านได้ง่าย จึงมีการให้มีความกระทัดรัดดังนี้
```
def p_decorate(func):
   def func_wrapper(name):
       return "<p>{0}</p>".format(func(name))
   return func_wrapper

@p_decorate
def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)

print(get_text("John"))
```

และการใช้งาน decorator สามารถ ใช้งานได้ ซ้อนๆ กัน
```
def p_decorate(func):
   def func_wrapper(name):
       return "<p>{0}</p>".format(func(name))
   return func_wrapper

def strong_decorate(func):
    def func_wrapper(name):
        return "<strong>{0}</strong>".format(func(name))
    return func_wrapper

def div_decorate(func):
    def func_wrapper(name):
        return "<div>{0}</div>".format(func(name))
    return func_wrapper
```

ลองทดสอบ
```
get_text = div_decorate(p_decorate(strong_decorate(get_text)))
get_text("Demo")
```

หากต้องการเขียนในรูปแบบของ python ก็สามารถเขียนได้เป็น
```
@div_decorate
@p_decorate
@strong_decorate
def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)

print(get_text("John"))
```

#### การใช้งาน decorator ร่วมกับ python classes
เนื่องจาก ในภาษา python อย่างที่ทราบ มาแล้วว่า class method จะต้องมีการประกาศรับค่า self เสมอ ดังนั้นใน func_wrapper ก็จำเป็นต้องประกาศรับค่า self เช่นกัน  (เข้าถึงตัวแปรผ่าน self)

```
def p_decorate(func):
   def func_wrapper(self):
       return "<p>{0}</p>".format(func(self))
   return func_wrapper

class Person(object):
    def __init__(self):
        self.name = "John"
        self.family = "Doe"

    @p_decorate
    def get_fullname(self):
        return self.name+" "+self.family

my_person = Person()
print(my_person.get_fullname())
```

หากต้องการให้ func_wrapper สามารถค่าจาก class ได้ด้วยก็ให้ใช้งานร่วมกับ ``*args, **kwargs``
ทำให้ func_wrapper รับค่า ที่เป็น argument และ keyword argument

```
def p_decorate(func):
   def func_wrapper(*args, **kwargs):
       return "<p>{0}</p>".format(func(*args, **kwargs))
   return func_wrapper

class Person(object):
    def __init__(self):
        self.name = "John"
        self.family = "Doe"
    @p_decorate
    def get_fullname(self):
        return self.name+" "+self.family

my_person = Person()
print(my_person.get_fullname())
```
