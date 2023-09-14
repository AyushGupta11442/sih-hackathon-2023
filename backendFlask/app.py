from flask import Flask, request, jsonify
import pandas as pd
from utils.fertilizer import fertilizer_dic
import torch
from torchvision import transforms
from PIL import Image
from utils.model import ResNet9
import requests
import config
import pickle
import io
import numpy as np
import pandas as pd
from utils.disease import disease_dic



# ==============================================================================================

# -------------------------LOADING THE TRAINED MODELS -----------------------------------------------

# Loading plant disease classification model

disease_classes = ['Apple___Apple_scab',
                   'Apple___Black_rot',
                   'Apple___Cedar_apple_rust',
                   'Apple___healthy',
                   'Blueberry___healthy',
                   'Cherry_(including_sour)___Powdery_mildew',
                   'Cherry_(including_sour)___healthy',
                   'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
                   'Corn_(maize)___Common_rust_',
                   'Corn_(maize)___Northern_Leaf_Blight',
                   'Corn_(maize)___healthy',
                   'Grape___Black_rot',
                   'Grape___Esca_(Black_Measles)',
                   'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
                   'Grape___healthy',
                   'Orange___Haunglongbing_(Citrus_greening)',
                   'Peach___Bacterial_spot',
                   'Peach___healthy',
                   'Pepper,_bell___Bacterial_spot',
                   'Pepper,_bell___healthy',
                   'Potato___Early_blight',
                   'Potato___Late_blight',
                   'Potato___healthy',
                   'Raspberry___healthy',
                   'Soybean___healthy',
                   'Squash___Powdery_mildew',
                   'Strawberry___Leaf_scorch',
                   'Strawberry___healthy',
                   'Tomato___Bacterial_spot',
                   'Tomato___Early_blight',
                   'Tomato___Late_blight',
                   'Tomato___Leaf_Mold',
                   'Tomato___Septoria_leaf_spot',
                   'Tomato___Spider_mites Two-spotted_spider_mite',
                   'Tomato___Target_Spot',
                   'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
                   'Tomato___Tomato_mosaic_virus',
                   'Tomato___healthy']

disease_model_path = 'models/plant_disease_model.pth'
disease_model = ResNet9(3, len(disease_classes))
disease_model.load_state_dict(torch.load(
    disease_model_path, map_location=torch.device('cpu')))
disease_model.eval()


# Loading crop recommendation model

crop_recommendation_model_path = 'models/RandomForest.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))


# =========================================================================================

# Custom functions for calculations


def weather_fetch(city_name):
    """
    Fetch and returns the temperature and humidity of a city
    :params: city_name
    :return: temperature, humidity
    """
    api_key = config.weather_api_key
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None


def predict_image(img, model=disease_model):
    """
    Transforms image to tensor and predicts disease label
    :params: image
    :return: prediction (string)
    """
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.ToTensor(),
    ])
    image = Image.open(io.BytesIO(img))
    img_t = transform(image)
    img_u = torch.unsqueeze(img_t, 0)

    # Get predictions from model
    yb = model(img_u)
    # Pick index with highest probability
    _, preds = torch.max(yb, dim=1)
    prediction = disease_classes[preds[0].item()]
    # Retrieve the class label
    return prediction

# ===============================================================================================
# ------------------------------------ FLASK APP -------------------------------------------------

app = Flask(__name__)


# crop recomendation
@ app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    title = 'Harvestify - Crop Recommendation'

    if request.method == 'POST':
        json_data = request.json
        N = int(json_data.get('nitrogen'))
        P = int(json_data.get('phosphorous'))
        K = int(json_data.get('pottasium'))
        ph = float(json_data.get('ph'))
        rainfall = float(request.form['rainfall'])

        # state = request.form.get("stt")
        city = str(json_data.get('city'))

        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
            my_prediction = crop_recommendation_model.predict(data)
            print(my_prediction)
            final_prediction = my_prediction[0]
            # return jsonify({"message": final_prediction}), 201
        else:
            final_prediction = str("try again")





# Define a route for the POST request
@app.route('/fertilizer-predict', methods=['POST'])
def fert_recommend():
    try:
        json_data = request.json
        crop_name = str(json_data.get('cropname'))
        N = int(json_data.get('nitrogen'))
        P = int(json_data.get('phosphorous'))
        K = int(json_data.get('pottasium'))
        # ph = float(request.form['ph'])

        df = pd.read_csv('Data/fertilizer.csv')

        nr = df[df['Crop'] == crop_name]['N'].iloc[0]
        pr = df[df['Crop'] == crop_name]['P'].iloc[0]
        kr = df[df['Crop'] == crop_name]['K'].iloc[0]

        n = nr - N
        p = pr - P
        k = kr - K
        temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
        max_value = temp[max(temp.keys())]
        if max_value == "N":
            if n < 0:
                key = 'NHigh'
            else:
                key = "Nlow"
        elif max_value == "P":
            if p < 0:
                key = 'PHigh'
            else:
                key = "Plow"
        else:
            if k < 0:
                key = 'KHigh'
            else:
                key = "Klow"
        response = str(fertilizer_dic[key])
        return jsonify({"message": response}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
    
    
    
    

# Define a route for the POST request
@app.route('/add-data', methods=['POST'])
def submit_form():
    try:
        # Get JSON data from the request
        json_data = request.json

        # Access form fields from the JSON data
        name = json_data.get('name')
        age = json_data.get('age')
        city = json_data.get('city')

        # Do something with the form data (e.g., store it in a database)
        # For demonstration purposes, we'll print the form data
        print(f"Received Form Data - Name: {name}, Age: {age}, City: {city}")

        return jsonify({"message": "Form data received successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Define a route to retrieve all data
@app.route('/get-data', methods=['GET'])
def get_data():
    return jsonify({"data": data_store})

if __name__ == '__main__':
    app.run(debug=True)
