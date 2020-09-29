from flask import Blueprint, request, jsonify
from services import patient_service
import pickle
import json
import numpy as np
import pandas as pd
from services import etl_service
from repo.readFromSql import getFromSql

api = Blueprint(
    name="patient_controller",
    import_name="patient_controller",
    url_prefix="/api/v1.0/model",
)


@api.route("/", methods=["POST"])
def create_patient():
    new_patient = request.get_json()
    model = pickle.load(open('model.pkl', 'rb'))

    db_df = getFromSql("PatientData")
    cols = list(etl_service.encoding(db_df).columns)
    final_df = pd.DataFrame(np.zeros((1,len(cols))), columns=cols)
    new_data = patient_service.save_patient(new_patient)
    enc = etl_service.encoding(pd.DataFrame([new_data]))
    for i in final_df.columns:
        if i in enc.columns:
            final_df.loc[0,i] = enc.loc[0,i]
    
    result = model.predict(final_df.to_numpy())
    
    if result[0] < 3:
        hospitalization = 'Day'
    elif result[0] < 5:
        hospitalization = 'Week'
    elif result[0] < 7:
        hospitalization = 'Two Weeks'
    elif result[0] < 9:
        hospitalization = 'Month'
    else:
        hospitalization = 'More'


    return jsonify(
        {
            "prediction":
            {
                "hospitalization": hospitalization
            }
        }
    )