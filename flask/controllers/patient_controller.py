from flask import Blueprint, request, jsonify
from services import patient_service
import pickle
import json
import numpy as np

api = Blueprint(
    name="patient_controller",
    import_name="patient_controller",
    url_prefix="/api/v1.0/model",
)



@api.route("/", methods=["POST"])
def create_patient():
    model = pickle.load(open('model.pkl', 'rb'))
    new_patient = request.get_json()
    
    # new_patient = {
    #     "gender": data["gender"],
    #     "age": data["age"],
    #     "los_days": data["los_days"],
    #     "admit_type": data["admit_type"],
    #     "admit_location": data["admit_location"],
    #     "admit_diagnosis": data["admit_diagnosis"],
    #     "insurance": data["insurance"],
    #     "religion": data["religion"],
    #     "marital_status": data["marital_status"],
    #     "ethnicity": data["ethnicity"],
    #     "num_callouts": data["num_callouts"],
    #     "num_diagnosis": data["num_diagnosis"],
    #     "num_procs": data["num_procs"],
    #     "admit_procedure": data["admit_procedure"],
    #     "num_ctp_events": data["num_ctp_events"],
    #     "num_input": data["num_input"],
    #     "num_labs": data["num_labs"],
    #     "num_microlabs": data["num_mirolabs"],
    #     "num_notes": data["num_notes"],
    #     "num_output": data["num_output"],
    #     "num_rx": data["num_rx"],
    #     "num_proc_events": data["num_proc_events"],
    #     "num_transfers": data["num_transfers"],
    #     "num_chart_events": data["num_chart_events"],
    #     "expired_hospital": data["expired_hospital"],
    #     "toal_num_interact": data["total_num_interact"],
    #     "los_group_num": data["los_group_num"]

    # }
    new_data = patient_service.save_patient(new_patient)
    # result = model.predict(np.array([list(new_data.values())]))
    return jsonify(new_data)
