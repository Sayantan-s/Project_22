from flask import Flask
from requests import request
import tensorflow as tf
from keras.models import model_from_json, load_model
from tensorflow.keras import backend
from tensorflow.python.framework import ops
import pandas as pd

app = Flask(__name__)

# model paths
model_name = "EF-3"
models_dir = './model/models/'
model_path = models_dir + model_name + '.json'
model_weights_path = models_dir + model_name + '.h5'

# classes/words
classes = ['Begin', 'Choose', 'Connection', 'Navigation',
         'Next', 'Previous', 'Start', 'Stop', 'Hello', 'Web']

# load the model, and pass in the custom metric function
global graph
graph = ops.get_default_graph()
model = load_model(model_weights_path)


@app.route("/load_model")
def load_model():

    model_is_loaded = False

    """
        Code for loading model
    """

    if model_is_loaded :
        return{
            "status" : "ok"
        }

    return {
        "status" : "failed"
    }


@app.route("/predict", methods=["POST"])
def predict():


    requestFromFrontend = "array"


    """
       Code for Predict model
    """
    return{
           "answers" : [
                {
                    "accuracy" : 99.5,
                    "word" : "Dog"
                },
                {
                    "accuracy" : 70,
                    "word" : "God"
                },
                {
                    "accuracy" : 9,
                    "word" : "Mug"
                }
            ]
        }


if __name__ == "__main__":
    app.run(debug = True)