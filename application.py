import os
import re
from flask import Flask, jsonify, render_template, request

# Configure application
app = Flask(__name__)

@app.route("/")
def index():
    """Render index.html"""
    return render_template("index.html")
