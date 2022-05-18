from flask import Flask
from requests import request

app = Flask(__name__)

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
<<<<<<< HEAD
   
=======

>>>>>>> 52b3f263c2f5361306eb22c98afbed431733d642

@app.route("/predict", methods=["POST"])
def predict():

<<<<<<< HEAD
=======
    requestFromFrontend = "array"


>>>>>>> 52b3f263c2f5361306eb22c98afbed431733d642
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