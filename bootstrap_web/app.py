import pandas as pd
import numpy as np
import sqlite3
import pprint
import googlemaps
import gmaps
import json
import requests
import math
import warnings
import yelp
import gmaps.geojson_geometries
import yelp_fusion 
from flask import Flask, jsonify, render_template, request

# Hide warning messages
from ipywidgets.embed import embed_minimal_html
warnings.filterwarnings('ignore')

#################################################
# Yelp API Key
#################################################

api_key='1bH1i6hqL0TXbaFy8Jm4O7O5brL-iPCC5-0MvC_Wm18KDkFM0vD51t7EuuSfZeQF_i2FxDSZFwUZBP2mCsV9McVCUustTrkIGVISF4p-ZJLkwLL_XY_lEhLmeBzaXHYx'

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def main_query():
    return render_template("index.html")

@app.route("/api/<term>/<zip_code>")
def resturant_query(term, zip_code):
    headers = {'Authorization': 'Bearer %s' % api_key}
    url='https://api.yelp.com/v3/businesses/search'
    params = {'term': term,'location': zip_code}
    req=requests.get(url, params=params, headers=headers)
    return (req.text)

if __name__ == "__main__":
    app.run(debug=True)
