import sys
sys.path.insert(0, 'E:\Project_22\model')
from load import *
from ctypes import resize
from flask import Flask, render_template, request
import numpy as np
import keras.models
import re

import os
import base64
import os
import imutils
import dlib  # run "pip install dlib"
import cv2  # run "pip install opencv-python"
import imageio
from imutils import face_utils

global graph, model
MAX_WIDTH, MAX_HEIGHT = 64, 64

app = Flask(__name__)

@app.route('/')
def index_view():
    return render_template('index.html')
    
# def convertImage(imgData1):
#     imgstr = re.search(b'base64,(.*)', imgData1).group(1)
#     with open('output.png', 'wb') as output:
#         output.write(base64.b64decode(imgstr))


@app.route("/load_model")
def load_model():

    model_is_loaded = False

    """
        Code for loading model
        init() is in load.py in model folder
    """
    model, graph = init()   
    print("model_loaded")

    if model != None:
        model_is_loaded = True
    
    if model_is_loaded:
        return{
            "status": "ok"
        }

    return {
        "status": "failed"
    }


def crop_and_save_image(img_path, write_img_path):
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor(
        'E:\Project_22\model\shape_predictor_81_face_landmarks.dat')
    # load the input image, resize it, and convert it to grayscale

    image = cv2.imread(img_path)
    image = imutils.resize(image, width=500)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # detect faces in the grayscale image
    rects = detector(gray, 1)
    if len(rects) > 1:
        print("ERROR: more than one face detected")
        return
    if len(rects) < 1:
        print("ERROR: no faces detected")
        return

    for (i, rect) in enumerate(rects):
        shape = predictor(gray, rect)
        shape = face_utils.shape_to_np(shape)
        name, i, j = 'mouth', 48, 68
        clone = gray.copy()

        (x, y, w, h) = cv2.boundingRect(np.array([shape[i:j]]))
        roi = gray[y:y+h, x:x+w]
        roi = imutils.resize(roi, width=250, inter=cv2.INTER_CUBIC)
        # saving image to path
        print('/images/' + write_img_path)
        cv2.imwrite(
            '/images/' + write_img_path, roi)


@app.route('/predict/', methods=['GET', 'POST'])
def predict():
    imgData = request.get_data()
    crop_and_save_image(img_path="imgData", write_img_path="any_path")
    image = imageio.imread('output.png', mode='L')
    image = resize(image, (MAX_WIDTH, MAX_HEIGHT))
    image = 255 * image
    image = np.expand_dims(image, axis=4)    

    with graph.as_default():
        out = model.predict(image)
        print(out)
        print(np.argmax(out, axis=1))

        response = np.array_str(np.argmax(out, axis=1))
        return response


if __name__ == '__main__':
    app.run(debug=True)