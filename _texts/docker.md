---
layout: narrative
title: "Docker installation"
author: sawangpong
editor: Sawangpong muadphet
rights:
source:
publication-date: 2018
toc:
- docker
- build docker file
---

## การติดตั้ง
![docker jupyter](../../assets/images/content_docker.png)
การใช้งาน docker ร่วมกับการพัฒนาภาษา python โดยการใช้งาน python3 ผ่านทาง jupyter

```
cd /tmp
wget https://bootstrap.pypa.io/get-pip.py
sudo python3 get-pip.py
sudo pip3 install setuptools
sudo pip3 install jupyter

cd $HOME
mkdir .jupyter
jupyter notebook password
Enter password:
Verify password:
[NotebookPasswordApp] Wrote hashed password to /home/user/.jupyter/jupyter_notebook_config.json

mkdir pythonproj
cd pythonproj
jupyter notebook

```
![docker jupyter](../../assets/images/jupyter.png)
