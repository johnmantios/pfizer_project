from flask import Flask, jsonify, make_response
from flask_cors import CORS
from controllers import (
    ping_controller,
    etl_controller,
    stats_cotroller,
    patient_controller,
)


app = Flask(__name__)
CORS(app)


@app.errorhandler(500)
def server_error(error):
    return make_response(jsonify({"error": "internal server error"}), 500)


app.register_blueprint(ping_controller.api)
app.register_blueprint(etl_controller.api)
app.register_blueprint(stats_cotroller.api)
app.register_blueprint(patient_controller.api)


if __name__ == "__main__":
    app.run(debug=True)
