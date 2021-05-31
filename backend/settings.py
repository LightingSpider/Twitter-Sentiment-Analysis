import pickle
import requests
from flask_cors import CORS

import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
nltk.data.path.append("/tmp")
nltk.download("vader_lexicon", download_dir="/tmp")


from flask import Flask
from flask_restx import Api

global sia, places, api, app

def load_obj(name):
    with open(name + '.pkl', 'rb') as f:
        return pickle.load(f)

def save_obj(obj, name):
    with open(name + '.pkl', 'wb') as f:
        pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)

def find_place(place):
    url = f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input={place}&inputtype=textquery&fields=geometry&key=AIzaSyCT9Vu-B1dEcan49J1igDpLIJnuy-tLJx8"

    payload={}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload).json()

    return response['candidates'][0]

def init():

    global sia, places

    # Initialize Analyzer
    sia = SentimentIntensityAnalyzer()

    # Initialize Flask application
    global api, app
    app = Flask(__name__)
    api = Api(app=app, version="1.0", title="Tweet Sentiment APIs")
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'


    return app
