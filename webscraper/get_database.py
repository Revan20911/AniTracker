from bs4 import BeautifulSoup
import pandas as pd
import requests
import json
from pymongo import MongoClient


def getDB():
    CONNECTION_STRING = 'mongodb+srv://mthe2845:CjYOZhqjNjkvUHlL@cluster0.dlmavar.mongodb.net/test?retryWrites=true&w=majority'
    client = MongoClient(CONNECTION_STRING)

    return client['test']


if __name__ == "__main__":

    db = getDB()  

