from flask import Flask, render_template, Response,jsonify
from keras.models import load_model
import cv2 
import numpy as np
import json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_data')
def get_data():
    with open('sample.json') as json_file:
        data = json.load(json_file)

    emotion = data['Class'].strip()
    percent = data['Percent']

    return jsonify({"emotion": emotion, "percent": percent})

    
if __name__ == "__main__":
    app.run(debug=True)
