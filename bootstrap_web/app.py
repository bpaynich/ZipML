import pandas as pd
import numpy as np
# import pprint
# import googlemaps
# import gmaps
import json
import requests
# import math
import warnings
import gmaps.geojson_geometries
from uszipcode import SearchEngine
from flask import Flask, jsonify, render_template, request
from yelp_api import api_key, owm_key
# Hide warning messages
from ipywidgets.embed import embed_minimal_html
warnings.filterwarnings('ignore')
# import finalsplt
# import predictFullString
import imageMove
import predict_interface_usage



#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route('/', methods=['GET'])
def main_query():
    return render_template("index.html")

@app.route("/api/<term>/<zip_code>")
def resturant_query(term, zip_code):
    headers = {'Authorization': 'Bearer %s' % api_key}
    url='https://api.yelp.com/v3/businesses/search'
    params = {'term': term,'location': zip_code}
    req=requests.get(url, params=params, headers=headers)
    return (req.text)

# @app.route("/api/weather/<zip_code>")
# def weather_query(zip_code):
#     base_url = "http://api.openweathermap.org/data/2.5/weather?"
#     units = "imperial"
#     query_url = f"{base_url}appid={owm_key}&zip={zip_code}&units={units}"
#     data = requests.get(query_url).json()
#     return data

@app.route("/api/housing/<zip_code>")
def housing_query(zip_code):
    search = SearchEngine(simple_zipcode=False)
    zipcode = search.by_zipcode(zip_code)
    zip_dict = zipcode.to_dict() # to dict
    # zip_code = json.dumps(zip_dict)
    # load_zip = json.loads(zip_code)
    return jsonify(zip_dict)

@app.route('/submit', methods=['GET'])
def submit_query():
    if request.method == 'GET':
        imageMove.moveImage("zip.png")
        zip_code = predict_interface_usage.predict("zip")
        print("-------Prediction Result ---------")
        # print(zip_code)
        print("----------------------------------")
    return render_template("index.html", zip_code=zip_code)

@app.route("/api/weather/<zip_code>")
def weather_query(zip_code):
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    units = "imperial"
    # zip_code=85016
    query_url = f"{base_url}appid={owm_key}&zip={zip_code}&units={units}"
    weather_data = requests.get(query_url).json()
    return jsonify(weather_data)

if __name__ == "__main__":
    app.run(debug=True)
