# from flask import Blueprint, request, jsonify
# from services import patient_service

# api = Blueprint(
#     name="patient_controller",
#     import_name="patient_controller",
#     url_prefix="api/v1.0/model",
# )


# # @api.route("/")
# # def get_all():



# @api.route("/", methods=["POST"])
# def create_patient():
#     data = request.get_json()
#     new_patient = {
#         "gender": data["gender"],
#         "age": data["age"],
#         "los_days": data["los_days"],
#         "admit_type": data["admit_type"],
#         "admit_location": data["admit_location"],
#         "admit_diagnosis": data["admit_diagnosis"],
#         "insurance": data["insurance"],
#         "religion": data["religion"],
#         "marital_status": data["marital_status"],
#         "ethnicity": data["ethnicity"],
#         "num_callouts": data["num_callouts"],
#         "num_diagnosis": data["num_diagnosis"],
#         "num_procs": data["num_procs"],
#         "admit_procedure": data["admit_procedure"],
#         "num_ctp_events": data["num_ctp_events"],
#         "num_input": data["num_input"],
#         "num_labs": data["num_labs"],
#         "num_microlabs": data["num_mirolabs"],
#         "num_notes": data["num_notes"],
#         "num_output": data["num_output"],
#         "num_rx": data["num_rx"],
#         "num_proc_events": data["num_proc_events"],
#         "num_transfers": data["num_transfers"],
#         "num_chart_events": data["num_chart_events"],
#         "expired_hospital": data["expired_hospital"],
#         "toal_num_interact": data["total_num_interact"],
#         "los_group_num": data["los_group_num"]

#     }
#     #I will try to save it in the db
#     return jsonify(new_patient) #This returns all the data of the new patient. Make it return some data and ML output or only ML output
