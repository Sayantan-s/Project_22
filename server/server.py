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
   

@app.route("/predict", methods=["POST"])
def predict():

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