from flask import Flask, jsonify, request
import joblib
import numpy as np
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)


@app.route("/rfprediction", methods=["POST"])
@cross_origin()
def rfprediction():
    model = joblib.load("random_forest_model.pkl")
    data = request.get_json()
    cycle = 1 if data["cycle"] == "Y" else 0
    weight_gain = 1 if data["weightGain"] == "Y" else 0
    hair_growth = 1 if data["hairGrowth"] == "Y" else 0
    skin_darkening = 1 if data["skinDarkening"] == "Y" else 0
    follicle_L = int(data["follicleL"])
    follicle_R = int(data["follicleR"])
    X = np.array(
        [[cycle, weight_gain, hair_growth, skin_darkening, follicle_L, follicle_R]]
    )
    prediction = "Yes" if model.predict(X)[0] == 1 else "No"
    response = {"prediction": prediction}
    print(prediction)
    return jsonify(response)


@app.route("/svmprediction", methods=["POST"])
@cross_origin()
def svmprediction():
    model = joblib.load("svm_model.pkl")
    data = request.get_json()
    cycle = 1 if data["cycle"] == "Y" else 0
    weight_gain = 1 if data["weightGain"] == "Y" else 0
    hair_growth = 1 if data["hairGrowth"] == "Y" else 0
    skin_darkening = 1 if data["skinDarkening"] == "Y" else 0
    follicle_L = int(data["follicleL"])
    follicle_R = int(data["follicleR"])
    X = np.array(
        [[cycle, weight_gain, hair_growth, skin_darkening, follicle_L, follicle_R]]
    )
    prediction = "Yes" if model.predict(X)[0] == 1 else "No"
    response = {"prediction": prediction}
    print(prediction)
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
