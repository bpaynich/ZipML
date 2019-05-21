import pandas as pd
import numpy as np
import pprint
import googlemaps
import gmaps
import json
import requests
import math
import warnings
import gmaps.geojson_geometries
from uszipcode import SearchEngine
from flask import Flask, jsonify, render_template, request
from yelp_api import api_key
# Hide warning messages
from ipywidgets.embed import embed_minimal_html
warnings.filterwarnings('ignore')
import finalsplt
import predictFullString

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route('/', methods=['GET', 'POST'])
def main_query():
    return render_template("index.html")

@app.route("/api/<term>/<zip_code>")
def resturant_query(term, zip_code):
    headers = {'Authorization': 'Bearer %s' % api_key}
    url='https://api.yelp.com/v3/businesses/search'
    params = {'term': term,'location': zip_code}
    req=requests.get(url, params=params, headers=headers)
    return (req.text)

@app.route("/api/housing/<zip_code>")
def housing_query(zip_code):
    search = SearchEngine(simple_zipcode=False)
    zipcode = search.by_zipcode(zip_code)
    zip_dict = zipcode.to_dict() # to dict
    # zip_code = json.dumps(zip_dict)
    # load_zip = json.loads(zip_code)
    return jsonify(zip_dict)

@app.route('/submit', methods=['GET', 'POST'])
def submit_query():
    if request.method == 'GET':
        finalsplt.split("zip.png")
        zip_code = predictFullString.predict("./")
        print("-------Prediction Result ---------")
        print(zip_code)
        print("----------------------------------")
    return render_template("index.html", zip_code=zip_code)


if __name__ == "__main__":
    app.run(debug=True)
