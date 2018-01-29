// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Basic Python3",
  author: "sawangpong",
  layout: "narrative",
  content: "hello world\nภาษาpython สามารถทำงานได้ทันทีโดยไม่ต้องมีการ compile ยกตัวอย่างการใช้งานคำสั่ง print() เพื่อส่งข้อความออกแสดงผลทางหน้าจอ\n\n$ python3\nPython 3.6.3 (default, Oct  3 2017, 21:45:48)\n[GCC 7.2.0] on linux\nType \"help\", \"copyright\", \"credits\" or \"license\" for more information.\n&gt;&gt;&gt; print(\"hello world\")\nhello world\n&gt;&gt;&gt;\n\n\nคำสั่ง dir, help\nstring = \"string\"\ndir(string)\nhelp(string.count)\n\ncomment\nการ comment จะทำให้ python ไม่ทำการประมวลผลบรรทัดดังกล่าว ด้วย\n# comment\n\n\nindentation\nเนื่องจากภาษาไพทอน ไม่มีการใช้ {} เพื่อแสดง code block แต่จะมีการใช้ ย่อหน้า indentation โดยทั่วไปจะตั้งไว้ 4 spaces\n\nx = 1\nif x == 1:\n    # indented four spaces\n    print(\"x is 1.\")\n\n\nหลักการของ Mutable vs Immutable\n\n  Mutable  เราสามารถเปลี่ยนแปลง object ได้โดยที่ ไม่ต้องมีการเปลี่ยนค่า id\n  Immutable เราไม่สามารถเปลี่ยน object โดยที่ไม่เปลี่ยน id ดังนั้นเมื่อมีการเปลี่ยน object id จะเปลี่ยนด้วย\n\n\n# Immutable\nmyval = \"python\"\nid(myval)\n\nmyval = \"love python\"\nid(myval)\n\n# Mutable\nmylist = []\nid(mylist)\n\nmylist.append(\"hello\")\nid(mylist)\n\n\nVariables and Types\nภาษาpython เป็นภาษาเชิง object oriented และเป็น Dynamic Type โดยไม่จำเป็นต้องมีการประกาศชนิดของตัวแปรเอาไว้ก่อน เพราะทุกๆ ตัวแปรของ python เป็น object\n\nInteger\nmyint = 7\nprint(myint)\n\nfloating\nmyfloat = 7.0\nprint(myfloat)\nmyfloat = float(7)\nprint(myfloat)\n\n\nString\nกำหนดด้วย “”, ‘’\nmystring = 'hello'\nprint(mystring)\nmystring = \"hello\"\nprint(mystring)\n\noperator +\none = 1\ntwo = 2\nthree = one + two\nprint(three)\n\nhello = \"hello\"\nworld = \"world\"\nhelloworld = hello + \" \" + world\nprint(helloworld)\n\n\nassignment\nการใช้การ assignment สามารถใช้งาน กำหนดได้มากกว่าครั้งละ 1 ตัวแปร และจะใช้ตำแหน่งในการกำหนดค่า\na, b = 3, 4\nprint(a,b)\n\nExercise\nให้ลองตั้งค่าตัวแปรเพื่อให้โปรแกรมทำงานอย่างถูกต้อง\n# change this code\nmystring = None\nmyfloat = None\nmyint = None\n\n# testing code\nif mystring == \"hello\":\n    print(\"String: %s\" % mystring)\nif isinstance(myfloat, float) and myfloat == 10.0:\n    print(\"Float: %f\" % myfloat)\nif isinstance(myint, int) and myint == 20:\n    print(\"Integer: %d\" % myint)\n\n\nLists\nLists มีลักษณะคล้ายกับ array สามารถที่จะเก็บค่าตัวแปรชนิดใดก็ได้ และมีขนาดไม่จำกัด สามารถที่นำ Lists มาวนลูปดีงค่าได้\nmylist = []\nmylist.append(1)\nmylist.append(2)\nmylist.append(3)\nprint(mylist[0]) # prints 1\nprint(mylist[1]) # prints 2\nprint(mylist[2]) # prints 3\n\n# prints out 1,2,3\nfor x in mylist:\n    print(x)\n\n\nแต่หากมีการอ้างอิงตำแหน่งที่เกินขอบเขตก็จะสร้าง exception\nmylist = [1,2,3]\nprint(mylist[10])\nprint(len(mylist))\n\n\nExercise\nเพิ่มตัวแปรใน lists ของตัวแปร numbers, strings  ด้วยคำสั่ง append\n\nnumbers = []\nstrings = []\nnames = [\"John\", \"Eric\", \"Jessica\"]\n\n# add numbers, strings\n\nsecond_name = names[1]\nprint(numbers)\nprint(strings)\nprint(\"The second name on the names list is %s\" % second_name)\n\n\n\n ตัวดำเนินการทางคณิตศาตร์\nเหมือนกับภาษาคอมพิวเตอร์อื่นที่สามารถรองรับการคำนวนทางด้านคณิตศาสตร์ เช่น addition, substraction, multiplication, division\nnumber = 1 + 2 * 3 / 4.0\nprint(number)\n\nremainder = 11 % 3\nprint(remainder)\n\nsquared = 7 ** 2\ncubed = 2 ** 3\n\nprint(squared)\nprint(cubed)\n\n\nString\n ตัวดำเนินการทาง strings\nhelloworld = \"hello\" + \" \" + \"world\"\nprint(helloworld)\n\nlotsofhellos = \"hello\" * 10\nprint(lotsofhellos)\n\n\n ตัวดำเนินการทาง Lists\neven_numbers = [2,4,6,8]\nodd_numbers = [1,3,5,7]\nall_numbers = odd_numbers + even_numbers\nprint(all_numbers)\n\nprint([1,2,3] * 3)\n\n\nExercise\n\n  สร้างตัวแปร x_list จาก object x จำนวน 10 ตัว\n  สร้างตัวแปร y_list จาก object y จำนวน 10 ตัว\n  นำผลลัพท์ที่ได้ของ x_list, y_list มารวมกันในตัวแปร big_list\n\n\nx = object()\ny = object()\n\nx_list = [x]\ny_list = [y]\nbig_list = []\n\nprint(\"x_list contains %d objects\" % len(x_list))\nprint(\"y_list contains %d objects\" % len(y_list))\nprint(\"big_list contains %d objects\" % len(big_list))\n\n# testing code\nif x_list.count(x) == 10 and y_list.count(y) == 10:\n    print(\"Almost there...\")\nif big_list.count(x) == 10 and big_list.count(y) == 10:\n    print(\"Great!\")\n\n\nStrings Formatting\nภาษา python ใช้รูปแบบของ ภาษา C เพื่อสร้างรูปแบบของString โดยการใช้สัญลักษณ์  %s , %d\n# This prints out \"Hello, John!\"\nname = \"John\"\nprint(\"Hello, %s!\" % name)\n\n# This prints out \"John is 23 years old.\"\nname = \"John\"\nage = 23\nprint(\"%s is %d years old.\" % (name, age))\n\nสำหรับตัวแปร List ใช้ %s เช่นกัน\n# This prints out: A list: [1, 2, 3]\nmylist = [1,2,3]\nprint(\"A list: %s\" % mylist)\n\nรูปแบบกำหนดพื้นฐาน\n\n  %s - String (or any object with a string representation, like numbers)\n  %d - Integers\n  %f - Floating point numbers\n  %.f - Floating point numbers with a fixed amount of digits to the right of the dot.\n  %x/%X - Integers in hex representation (lowercase/uppercase)\n\n\nformat สามารถกำหนดไว้ในตัวแปร\ndata = (\"John\", \"Doe\", 53.44)\nformat_string = \"Hello %s %s. Your current balance is $%s.\"\n\nprint(format_string % data)\n\nAdvance String Formatting\nในpython สามารถกำหนด format อ้างอิงตาม PEP 3101\n(PEP - Python Enhancement Proposals)\n\"Hello {0}, {1}\".format(\"Guido van\", \"Rossum\")\n\n\"Hello {firstname}, {lastname}\".format(firstname=\"Guido van\", name=\"Rossum\")\n\n\nBasic String Operations\nการกำหนด string สามารถกำหนดภายใน “”, หรือ ‘’\n\nastring = \"Hello world!\"\nastring2 = 'Hello world!'\n\n\nความยาวของ string\n\nastring = \"Hello world!\"\nprint(\"single quotes are ' '\")\n\nprint(len(astring))\n\n\nค้นหาตำแหนงของตัวอักษร index  จะจับอักษรตัวแรกส่วน\n\nastring = \"Hello world!\"\nprint(astring.index(\"o\"))\n\nนับตัวอักษร\nastring = \"Hello world!\"\nprint(astring.count(\"l\"))\n\nprint string  โดยการกำหนด จุดเริ่ม และ จุดจบ  โดยการกำหนด index\nโดยดึงค่าจากตำแหน่งเริ่ม และ จุดสุดท้าย-1 ในตัวอย่างกำหนด กำหนดไว้เป็น 7 ดังนั้นจะดึงข้อมูลมาจนถึงตำแหน่งที่ 6\nตัวอย่าง\n\nH   e   l   l   o       W   o   r   l   d\n0   1   2   3   4   5   6   7   8   9   10\n-11 -10 -9  -8  -7  -6  -5  -4  -3  -2  -1\n\n\nastring = \"Hello world!\"\nprint(astring[3:7])\n\nอ้างอิงจากเส้นจำนวน\n\n\nกำหนด step [start:stop:step]\n\nastring = \"Hello world!\"\nprint(astring[3:7:2])\n\nnumber = [13, 14, 15, 16, 17, 18, 19]\nprint(number[::2])\n\nการอ้างอิง index\n\n\nname = \"Monty Python\"\nprint(name[0:2])\nprint(name[2:5])\nprint(name[:4])\nprint(name[4:])\nprint(name[:])\nprint(name[1:-1])\n\n\nสลับอักษรตัวเล็ก ตัวใหญ่\n\nastring = \"Hello world!\"\nprint(astring.upper())\nprint(astring.lower())\n\n\nตรวจสอบ การเริ่มต้นของ string และ คำลงท้าย\n\nastring = \"Hello world!\"\nprint(astring.startswith(\"Hello\"))\nprint(astring.endswith(\"asdfasdfasdf\"))\n\n\nการแบ่งคำ\n\nastring = \"Hello world!\"\nafewwords = astring.split(\" \")\n\n\nCondition\nภาษา python กำหนดให้ตัวแปร boolean เพื่อทดสอบเงื่อนไข\nx = 2\nprint(x == 2)\nprint(x == 3)\nprint(x &lt; 3)\n\n\nนอกจากนั้น python ยังสามารถใช้คำ and, or เป็น boolean operators เพื่อสร้างการทดสอบเงื่อนไข\n\nname = \"John\"\nage = 23\nif name == \"John\" and age == 23:\n    print(\"Your name is John, and you are also 23 years old.\")\n\nif name == \"John\" or name == \"Rick\":\n    print(\"Your name is either John or Rick.\")\n\n\nนอกจากนั้นยังมี in operator เพื่อทดสอบการมีอยู่ของ object ที่อยู่ใน lists\n\nname = \"John\"\nif name in [\"John\", \"Rick\"]:\n    print(\"Your name is either John or Rick.\")\n\n\nif..else\nภาษา python มีการใช้ if..else แต่ต้องมีการกำหนด การย่อหน้า ที่มีระดับเดียวกัน ส่วนมากกำหนดให้เป็น 4 spaces\nx = 2\nif x == 2:\n    print(\"x equals two!\")\nelse:\n    print(\"x does not equal to two.\")\n\n\nis  กับ ==\nx = [1,2,3]\ny = [1,2,3]\nprint(x == y) # Prints out True\nprint(x is y) # Prints out False\n\na = 2\nb = 2\nprint(a is b)\n\n\nnot ใช้สำหรับการ invert ค่าของ boolean\nprint(not False)\nprint((not False) == (False))\n\n\nloops\nสำหรับ python มี loop อยู่ด้วยกัน 2 แบบ คือ for, while\nprimes = [2, 3, 5, 7]\nfor prime in primes:\n    print(prime)\n\n\n# Prints out the numbers 0,1,2,3,4\nfor x in range(5):\n    print(x)\n\n# Prints out 3,4,5\nfor x in range(3, 6):\n    print(x)\n\n# Prints out 3,5,7\nfor x in range(3, 8, 2):\n    print(x)\n\n\ncount = 0\nwhile count &lt; 5:\n    print(count)\n    count += 1  # This is the same as count = count + 1\n\n\nbreak และ continue\n\n  break จะใช้สำหรับการออกจาก for loop และ while loop\n  continue ใช้สำหรับการ skip ออกจาก current block และกลับไปทำใน for, while ต่อไป\n\n\n# Prints out 0,1,2,3,4\n\ncount = 0\nwhile True:\n    print(count)\n    count += 1\n    if count &gt;= 5:\n        break\n\n# Prints out only odd numbers - 1,3,5,7,9\nfor x in range(10):\n    # Check if x is even\n    if x % 2 == 0:\n        continue\n    print(x)\n\n\nการใช้งาน else\nสามารถใช้งาน else ได้ทั้ง for และ while\ncount=0\nwhile(count&lt;5):\n    print(count)\n    count +=1\nelse:\n    print(\"count value reached %d\" %(count))\n\n# Prints out 1,2,3,4\nfor i in range(1, 10):\n    if(i%5==0):\n        break\n    print(i)\nelse:\n    print(\"this is not printed because for loop is terminated because of break but not due to fail in condition\")\n\n\nFunctions\nฟังก์ชัน เป็นการนำเอาแต่ละคำสั่งมารวมกันภายใต้ block ทำให้อ่านง่าย นำกลับมาใช้ใหม่ได้\n\ndef my_function():\n    print(\"Hello From My Function!\")\n\ndef my_function_with_args(username, greeting):\n    print(\"Hello, %s , From My Function!, I wish you %s\"%(username, greeting))\n\ndef sum_two_numbers(a, b):\n    return a + b\n\nmy_function()\nmy_function_with_args(\"John Doe\", \"a great year!\")\nx = sum_two_numbers(1,2)\n\n\nClasses and Object\nobjects คือการ รวบรวม (encapsulation) รวมทั้ง variables , functionsเข้ามาอยู่ใน object เดียวกัน\n\nclass MyClass:\n    variable = \"blah\"\n\n    def function(self):\n        print(\"This is a message inside the class.\")\n\nmyobjectx = MyClass()\nmyobjecty = MyClass()\n\nprint(myobjectx.variable)\nprint(myobjecty.variable)\n\nmyobjectx.function()\nmyobjecty.function()\n\n\nDictionaries\nDictionaries เป็นชนิด data type ที่เป็นการกำหนดด้วย key,value โดย value  สามารถเป็น object ชนิดใดก็ได้\nphonebook = {}\nphonebook[\"John\"] = 938477566\nphonebook[\"Jack\"] = 938377264\nphonebook[\"Jill\"] = 947662781\nprint(phonebook)\n\n\nหรือ\nphonebook = {\"John\" : 938477566,\"Jack\" : 938377264,\"Jill\" : 947662781}\nfor name, number in phonebook.items():\n    print(\"Phone number of %s is %d\" % (name, number))\n\ndel phonebook[\"John\"]\nprint(phonebook)\n\nphonebook = {\n   \"John\" : 938477566,\n   \"Jack\" : 938377264,\n   \"Jill\" : 947662781\n}\nphonebook.pop(\"John\")\nprint(phonebook)\n\nif \"Jake\" in phonebook:\n    print(\"Jake is listed in the phonebook.\")\nif \"Jill\" not in phonebook:\n    print(\"Jill is not listed in the phonebook.\")\n\nTuple\nเป็น  sequence ของ Immutable python object เป็นลำดับของ sequence เช่นกัน lists ความแตกต่างคือ tuples ไม่สามารถเปลี่ยนแปลงได้ การสร้าง tuple จะใช้ เครื่องหมายวงเล็บ\ntup1 = ('physics', 'chemistry', 1997, 2000);\ntup2 = (1, 2, 3, 4, 5 );\ntup3 = \"a\", \"b\", \"c\", \"d\";\n\n\nหากต้องการสร้าง empty tuples\ntup1 = ();\n\n\nหากมีสามาชิกแค่ 1 ตัวก็จำเป็นต้องมี comma\ntup1 = (50,);\n\n\nทดสอบ tuples\ntup1 = ('physics', 'chemistry', 1997, 2000);\ntup2 = (1, 2, 3, 4, 5, 6, 7 );\nprint \"tup1[0]: \", tup1[0];\nprint \"tup2[1:5]: \", tup2[1:5];\n\n\nupdate\ntup1 = (12, 34.56);\ntup2 = ('abc', 'xyz');\n\n# Following action is not valid for tuples\n# tup1[0] = 100;\n\n# So let's create a new tuple as follows\ntup3 = tup1 + tup2;\nprint tup3;\n\n\ndelete tuples\ntup = ('physics', 'chemistry', 1997, 2000);\nprint tup;\ndel tup;\nprint(\"After deleting tup : \");\nprint tup;\n\ntuple Operations\nสามารถใช้ + *   เหมือนกับการใช้งานของ string\n\n\nBuild in function ของ tuples\n\n\nModules and Packages\nโมดูล ใน ภาษาไพทอน คือ ไฟล์ ที่นามสกุล .py  ที่มีการ implement ฟังก์ชัน\nโมดูล สามารถ ที่จะถูก  import จาก โมดูลอื่น ด้วยคำสั่ง import\nimport urllib\ndir(urllib)\nhelp(urllib.urlopen)\n\n\nPackages\npackages ทำหน้าเป็น namespaces ของ โมดูลต่างๆ แต่ละ package ใน python คือ dicrectory ธรรมดาที่ภายใน มีfile ที่มีชื่อว่า init.py เป็น file ว่างๆ\nตัวอย่าง\n\n\npass by reference vs value\nทุก parameters หรือ arguments ใน python จะส่งค่าผ่านแบบ reference ดังนั้นการเปลี่ยนแปลงค่า ภายใน functions\n\ndef changeme( mylist ):\n   \"This changes a passed list into this function\"\n   mylist.append([1,2,3,4]);\n   print \"Values inside the function: \", mylist\n   return\n\n# Now you can call changeme function\nmylist = [10,20,30];\nchangeme( mylist );\nprint \"Values outside the function: \", mylist\n\n\nแต่หาก เป็นการกำหนด เป็น local ในฟังก์ชัน การเปลี่ยนแปลงจะไม่มีผลกระทบกับ ค่าใด\ndef changeme( mylist ):\n   \"This changes a passed list into this function\"\n   mylist = [1,2,3,4]; # This would assig new reference in mylist\n   print \"Values inside the function: \", mylist\n   return\n\n# Now you can call changeme function\nmylist = [10,20,30];\nchangeme( mylist );\nprint \"Values outside the function: \", mylist\n\n\nเมื่อมีการประกาศตัวแปรแบบรับค่า จะต้องส่งค่าไป ถ้าไม่ส่งไปจะเป็น error\ndef printme( str ):\n   \"This prints a passed string into this function\"\n   print(str)\n   return;\n\n# Now you can call printme function\nprintme()\n\nTraceback (most recent call last):\n  File \"&lt;stdin&gt;\", line 1, in &lt;module&gt;\nTypeError: printme() missing 1 required positional argument: 'str'\n\n\nลำดับของ arguments\nการส่งค่าให้ตัวแปร python จะอิงตามตำแหน่ง แต่หาเราใช้กำหนดตัวแปรตอนส่งค่าไป ก็ไม่จำเป็นต้องขั้นกับตำแหน่ง\ndef printinfo( name, age ):\n   \"This prints a passed info into this function\"\n   print(\"Name: \", name)\n   print(\"Age \", age)\n   return\n\nprintinfo(\"miki\",50)\nprintinfo( age=50, name=\"miki\" )\nprintinfo(50,\"Abc\")\n\n\nการส่งค่า ให้แก่ฟังชั่น มากกว่าค่าประกาศไว้\n\n  python สามารถใช้งาน * ไว้หน้าตัวแปร\n  โดยตัวแปรดังกล่าวจะทำหน้าที่เก็บค่าทั้งหมด ที่ส่งเข้ามาแบบ non keyword argument  ไปเก็บไว้เป็นตัวแปรชนิด tuple\n\n\ndef printinfo( arg1, *vartuple ):\n   \"This prints a variable passed arguments\"\n   print(\"Output is: \")\n   print(arg1)\n   for var in vartuple:\n      print(var)\n   return;\n\n# Now you can call printinfo function\nprintinfo( 10 )\nprintinfo( 70, 60, 50 )\n\n\n  นอกจากนั้นการมีการใช้งาน ** ไว้หน้าตัวแปร ตัวแปรดังกล่าจะหน้าที่รับค่า ที่ส่งเข้ามาที่เป็น keyword arguments ไปเก็บไว้ในตัวแปรชนิด Dictionaries\n\n\ndef printinfo( arg1, **vardic ):\n   \"This prints a variable passed arguments\"\n   print(\"Output is: \")\n   print(arg1)\n   for key,var in vardic.items():\n      print(\"key {} , var {}\".format(key,var))\n   return;\n\n# Now you can call printinfo function\nprintinfo( 10 )\nprintinfo( 70, x=60, y=50 )\n\n\nการใช้ *args รวมกับ **kwargs\ndef example(arg1,arg2, *args, **kwargs):\n    print(arg1)\n    print(arg2)\n    print(args)\n    for key,var in kwargs.items():\n       print(\"key {} , var {}\".format(key,var))\n    return;\n\nexample(1,2,3,4,x=1,y=2)\n\n",
  id: 0
});
index.addDoc({
  title: "Docker installation",
  author: "sawangpong",
  layout: "narrative",
  content: "การติดตั้ง\n\nการใช้งาน docker ร่วมกับการพัฒนาภาษา python โดยการใช้งาน python3 ผ่านทาง jupyter\n\ncd /tmp\nwget https://bootstrap.pypa.io/get-pip.py\nsudo python3 get-pip.py\nsudo pip3 install setuptools\nsudo pip3 install jupyter\n\ncd $HOME\nmkdir .jupyter\njupyter notebook password\nEnter password:\nVerify password:\n[NotebookPasswordApp] Wrote hashed password to /home/user/.jupyter/jupyter_notebook_config.json\n\nmkdir pythonproj\ncd pythonproj\njupyter notebook\n\n\n\n",
  id: 1
});
index.addDoc({
  title: "Python installation",
  author: "sawangpong",
  layout: "narrative",
  content: "การติดตั้ง\nภาษาpython สามารถติดตั้งการใช้งานได้ทุก platform แล้วแต่ความถนัดของนักพัฒนา ผู้เรียนจะต้องทำการติดตั้ง python ให้เหมาะสมกับการใช้งานดังนี้\n\nfor windows\n\n  ให้เปิด browser ไปยัง www.python.org ไปยังเมนู Download\nเพื่อ ทำการ download python 3.6.4\n\n  ให้ทำการติดตั้ง ตัว installer 64bit ที่ทำการ download มา\n\n  เลือกการติดตั้งสำหรับ “Install for all users” แล้วกด next\n  เลือก Default PATH\n\n  เปิด windows terminal และทำการ ทดสอบ import os, sys ดังรูป\n\n\n\n\nfor mac os\n\n  สามารถติดตั้งผ่าน brew โดยให้เปิด terminal แล้วสั่งคำสั่ง\n\n\nruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"\n\n\n  จากนั้นให้เพิ่ม ค่าตั้งแปร PATH ใน file ~./profile\n    export PATH=/usr/local/bin:/usr/local/sbin:$PATH\n    \n  \n  เมื่อเสร็จเรียบร้อยให้ทำการติดตั้ง python3 ด้วยคำสั่ง\n    brew install python3\n    \n  \n  เปิด mac terminal\n\n\n\n\n\nfor linux\nubuntu\n# apt update &amp;&amp; apt upgrade\n# add-apt-repository ppa:jonathonf/python-3.6\n# apt install python3.6\n# python3 -v\n\n",
  id: 2
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Basic Python3",
  "author": "sawangpong",
  "layout": "narrative",
  "link": "/texts/basicpython/",
}
,{
  "title": "Docker installation",
  "author": "sawangpong",
  "layout": "narrative",
  "link": "/texts/docker/",
}
,{
  "title": "Python installation",
  "author": "sawangpong",
  "layout": "narrative",
  "link": "/texts/installation/",
}
]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/python3tutorial'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
