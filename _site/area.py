#!/usr/bin/python 

def cal_area(base, height):
    print("Module's name: {}".format(__name__))
    return base*height

if __name__=='__main__':
    print(cal_area(10,20))
