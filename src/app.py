import pandas as pd
import numpy as np
import sqlite3
import pprint
import googlemaps
import gmaps
import json
import math
import warnings
import gmaps.geojson_geometries
  
from flask import Flask, jsonify, render_template, request

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine
# from flask_sqlalchemy import SQLAlchemy

# Hide warning messages
from ipywidgets.embed import embed_minimal_html
warnings.filterwarnings('ignore')

#################################################
# Flask Setup
#################################################

app = Flask(__name__)
# app.config['JSON_SORT_KEYS'] = False

#################################################
# Flask Routes
#################################################

@app.route("/")
def zip_query():
    return render_template("zip.html")

@app.route("/things")
def things_query():
    return render_template("things.html")

@app.route("/housing")
def housing_query():
    return render_template("housing.html")

@app.route("/schools")
def schools_query():
    return render_template("schools.html")

@app.route("/chrime")
def chrime_query():
    return render_template("chrime.html")

if __name__ == "__main__":
    app.run(debug=True)
