from flask import Blueprint, request
from werkzeug.utils import secure_filename
import os

api = Blueprint('api', __name__)

@api.route('/hello')
def index():
    return "Hello, World!"

@api.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part in the request', 400

    file = request.files['file']

    if file.filename == '':
        return 'No selected file', 400

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join('./', filename))
        return 'File uploaded successfully', 200

