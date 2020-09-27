from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)





@app.route("/ping")
def ping():
    return jsonify("Pong")


app.run(debug=True)