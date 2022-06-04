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
import tensorflow as tf


model_name = "EF-3"
models_dir = './model/models/'
model_path = models_dir + model_name + '.json'
model_weights_path = models_dir + model_name + '.h5'
global graph, model
MAX_WIDTH, MAX_HEIGHT, max_seq_length = 64, 64, 22
classes = ['Begin', 'Choose', 'Connection', 'Navigation',
            'Next', 'Previous', 'Start', 'Stop', 'Hello', 'Web']

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
    print("model loaded")

    if (model != None) and (graph != None):
        model_is_loaded = True
    
    if model_is_loaded:
        return{
            "status": "ok"
        }

    return {
        "status": "failed"
    }


def crop_and_save_image(img, img_path, write_img_path, img_name):

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
        print(write_img_path)
        cv2.imwrite(write_img_path, roi)


@app.route('/predict/', methods=['GET', 'POST'])
def predict():
    imgData = request.get_data()
    raw_directory = 'server/raw_images'
    final_diretory = 'E:\Project_22\server\/final_image'
    filelist = os.listdir(raw_directory)
    final_filelist = os.listdir(final_diretory)
    for img_name in filelist:
        if img_name.startswith('color'):
            image = imageio.v2.imread(raw_directory + '/' + '' + img_name)
            crop_and_save_image(image, raw_directory + '/' + '' + img_name,
                                final_diretory + '/' + '' + img_name, img_name)
            print("function running")

    '''
    converting frames into image_sequence for one word
    '''
    sequence = []
    image_sequence = []
    for image_name in final_filelist:
        if image_name.startswith('color'):
            image = imageio.v2.imread(final_diretory + '/' + image_name)
            image = cv2.resize(image, (MAX_WIDTH, MAX_HEIGHT))
            image = 255 * image
            image = image.astype(np.uint8)
            sequence.append(image)
    pad_array = [np.zeros((MAX_WIDTH, MAX_HEIGHT))]
    sequence.extend(pad_array * (max_seq_length - len(sequence)))
    sequence = np.array(sequence)
    image_sequence = np.array([sequence])

    def normalize_it(X):
        v_min = X.min(axis=(2, 3), keepdims=True)
        v_max = X.max(axis=(2, 3), keepdims=True)
        X = (X - v_min)/(v_max - v_min)
        X = np.nan_to_num(X)
        return X
    
    image_sequence = normalize_it(image_sequence)
    image_sequence = np.expand_dims(image_sequence, axis=4)
    print(image_sequence.shape)
    
    model, graph = init()
    with graph.as_default():
        json_file = open(model_path, 'r')
        loaded_model_json = json_file.read()
        json_file.close()

        # use Keras model_from_json to make a loaded model
        loaded_model = tf.keras.models.model_from_json(loaded_model_json)

        #load weights into new model
        loaded_model.load_weights(model_weights_path)
        print("Loaded Model from disk")

        # compile and evaluate loaded model
        opt = tf.keras.optimizers.Adam(learning_rate=0.0001)
        loaded_model.compile(loss='categorical_crossentropy',
                            optimizer=opt, metrics=['accuracy'])
        out = loaded_model.predict(image_sequence)
        #getting percentage
        percentage_list = []
        for i in range(len(out[0])):
            percentage_list.append("{0:.2%}".format(out[0][i]))
        my_result = {classes[i]: percentage_list[i]
                     for i in range(len(classes))}
        
        
        return my_result
        # print(np.argmax(out, axis=1))
        # response = int(np.array(np.argmax(out, axis=1)))
        # return classes[response]
    

if __name__ == '__main__':
    app.run(debug=True)