from flask import Blueprint, jsonify
from services.emp_stats_service import EmployeeStatService
from services import stats_service

api = Blueprint(
    name="stats_controller",
    import_name="stats_controller",
    url_prefix="/api/v1.0/stats",
)


@api.route("/")
def stats():
    return stats_service.main()
    # stats = EmployeeStatService()
    # return jsonify(stats.to_json()), 200
