from flask import Blueprint, request, jsonify
from services import patient_service
import pickle
import json
import numpy as np
import pandas as pd
from services import etl_service

api = Blueprint(
    name="patient_controller",
    import_name="patient_controller",
    url_prefix="/api/v1.0/model",
)


@api.route("/", methods=["POST"])
def create_patient():
    new_patient = request.get_json()
    model = pickle.load(open('model.pkl', 'rb'))
    new_data = patient_service.save_patient(new_patient)
    enc = etl_service.encoding(pd.DataFrame([new_data]))
    result = model.predict(enc.to_numpy())
    return jsonify(result)