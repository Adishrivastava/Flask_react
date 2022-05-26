from flask import Flask
from flask_cors import CORS


def create_app():
    # Initializing flask app
    app = Flask(__name__)
    CORS(app)
    cors = CORS(app, resources={r"/": {"origins": "*"}})
    return app