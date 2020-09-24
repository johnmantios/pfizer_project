from flask import Blueprint, jsonify, abort
from services import etl_service

api = Blueprint(
    name="etl_controller", 
    import_name="etl_controller", 
    url_prefix="/api/v1.0/etl"
)


@api.route("/")
def etl():
    result = etl_service.main()[1]
    if result=="Completed":
        return 'Good job'
    abort(500)