from bs4 import BeautifulSoup
import pandas as pd
import requests
import json
from pymongo import MongoClient
from get_database import getDB

def getShowInfo(show):
    page_src = show[1]
    resp = requests.get(page_src)
    cont = BeautifulSoup(resp.content, "html.parser")
    info = []

    for i in cont.findAll("div", {"class":"leftside"}):
        for i in i.findAll("div", {"class" : "spaceit_pad"}):
            text = i.text
            cleaned_text = text.replace('\n', '')
            info.append(cleaned_text)
    show.append(info)

def getShowImage(show):

    page_src = show[1]
    resp = requests.get(page_src)
    cont = BeautifulSoup(resp.content, "html.parser")

    for i in cont.findAll("div", {"class":"leftside"}):
        show.append((i.find("img"))['data-src'])

def getShowDesc(show):
    page_src = show[1]
    resp = requests.get(page_src)
    cont = BeautifulSoup(resp.content, "html.parser")

    for i in cont.findAll("div", {"class":"rightside js-scrollfix-bottom-rel"}):
        text = (i.find("p").text)
        cleaned_text = text.replace('\n', '').replace('\r', '')
        show.append(cleaned_text)


url = "https://myanimelist.net/topanime.php"
response = requests.get(url, timeout=5)
content = BeautifulSoup(response.content, "html.parser")
showlist = []

for i in content.findAll("td", {"class" : "title al va-t word-break"}):
    showlist.append([(i.find("h3")).text, (i.find("a"))['href']])

for i in showlist:
    getShowImage(i)
    getShowDesc(i)
    getShowInfo(i)
    
print(showlist[0])
        
db = getDB()
collection = db['series']

for i in showlist:
    show = {
        "title" : i[0],
        "img": i[2],
        "desc" : i[3],
        "episodes": i[4][5],
        "aired": i[4][7]
    }
    collection.insert_one(show)

    


