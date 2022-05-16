# imports
import keras.models
from keras.models import model_from_json
import tensorflow as tf

# model paths
model_name = "EF-3"
models_dir = './model/models/'
model_path = models_dir + model_name + '.json'
model_weights_path = models_dir + model_name + '.h5'

# opening and store file in a variable
json_file = open(model_path,'r')
loaded_model_json = json_file.read()
json_file.close()

# use Keras model_from_json to make a loaded model
loaded_model = model_from_json(loaded_model_json)

# load weights into new model
loaded_model.load_weights(model_weights_path)
print("Loaded Model from disk")

# compile and evaluate loaded model
opt = tf.keras.optimizers.Adam(learning_rate=0.0001)
loaded_model.compile(loss='categorical_crossentropy',
                     optimizer=opt, metrics=['accuracy'])
print("Loaded Model Weights from disk")
print(loaded_model.summary())
