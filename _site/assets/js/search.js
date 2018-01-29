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
  title: "Docker installation",
  author: "sawangpong",
  layout: "narrative",
  content: "การติดตั้ง\n\nการใช้งาน docker ร่วมกับการพัฒนาภาษา python โดยการใช้งาน python3 ผ่านทาง jupyter\n\ncd /tmp\nwget https://bootstrap.pypa.io/get-pip.py\nsudo python3 get-pip.py\nsudo pip3 install setuptools\nsudo pip3 install jupyter\n\ncd $HOME\nmkdir .jupyter\njupyter notebook password\nEnter password:\nVerify password:\n[NotebookPasswordApp] Wrote hashed password to /home/user/.jupyter/jupyter_notebook_config.json\n\nmkdir pythonproj\ncd pythonproj\njupyter notebook\n\n\n\n",
  id: 0
});
index.addDoc({
  title: "Python installation",
  author: "sawangpong",
  layout: "narrative",
<<<<<<< HEAD
  content: "การติดตั้ง\nภาษาpython สามารถติดตั้งการใช้งานได้ทุก platform แล้วแต่ความถนัดของนักพัฒนา ผู้เรียนจะต้องทำการติดตั้ง python ให้เหมาะสมกับการใช้งานดังนี้\n\nfor windows\n\n  ให้เปิด browser ไปยัง www.python.org ไปยังเมนู Download\nเพื่อ ทำการ download python 3.6.4\n\n  ให้ทำการติดตั้ง ตัว installer 64bit ที่ทำการ download มา\n\n  เลือกการติดตั้งสำหรับ “Install for all users” แล้วกด next\n  เลือก Default PATH\n\n  เปิด windows terminal และทำการ ทดสอบ import os, sys ดังรูป\n\n\n\n\nfor mac os\n\n  สามารถติดตั้งผ่าน brew โดยให้เปิด terminal แล้วสั่งคำสั่ง\n\n\nruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"\n\n\n  จากนั้นให้เพิ่ม ค่าตั้งแปร PATH ใน file ~./profile\n    export PATH=/usr/local/bin:/usr/local/sbin:$PATH\n    \n  \n  เมื่อเสร็จเรียบร้อยให้ทำการติดตั้ง python3 ด้วยคำสั่ง\n    brew install python3\n    \n  \n  เปิด mac terminal\n\n\n\n\n\nfor linux\nubuntu\n# apt update &amp;&amp; apt upgrade\n# add-apt-repository ppa:jonathonf/python-3.6\n# apt install python3.6\n# python3 -v\n\n",
  id: 0
=======
  content: "การติดตั้ง\nภาษาpython สามารถติดตั้งการใช้งานได้ทุก platform แล้วแต่ความถนัดของนักพัฒนา ผู้เรียนจะต้องทำการติดตั้ง python ให้เหมาะสมกับการใช้งานดังนี้\n\nfor windows\n\n  ให้เปิด browser ไปยัง www.python.org ไปยังเมนู Download\nเพื่อ ทำการ download python 3.6.4\n\n  ให้ทำการติดตั้ง ตัว installer ที่ทำการ download มา\n  เลือกการติดตั้งสำหรับ “Install for all users” แล้วกด next\n  เลือก Default PATH\n    for mac os\n    สามารถติดตั้งผ่าน brew โดยให้เปิด terminal แล้วสั่งคำสั่ง\n  \n\n\nruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"\n\nจากนั้นให้เพิ่ม ค่าตั้งแปร PATH ใน file ~./profile\nexport PATH=/usr/local/bin:/usr/local/sbin:$PATH\n\nเมื่อเสร็จเรียบร้อยให้ทำการติดตั้ง python3 ด้วยคำสั่ง\nbrew install python3\n\n",
  id: 1
>>>>>>> 4ec38b9b7b0370779481c3b55ecf947f65a48a91
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
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
