from flask import Blueprint, request, jsonify
from services import patient_service

api = Blueprint(
    name="employee_controller",
    import_name="employee_controller",
    url_prefix="api/v1.0/employees",
)


# @api.route("/")
# def get_all():



# @api.route("/", methods=["POST"])
# def save_employee():