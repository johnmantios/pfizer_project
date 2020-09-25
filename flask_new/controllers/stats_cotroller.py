from flask import Blueprint, jsonify
from services import stats_service

api = Blueprint(
    name="stats_controller",
    import_name="stats_controller",
    url_prefix="/api/v1.0/stats",
)


@api.route("/")
def stats():
    return jsonify(stats_service.main())