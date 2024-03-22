import flask
import os

app = flask.Flask(__name__)
port = os.getenv('PORT')
python_version = os.getenv('PYTHON_VERSION')

@app.route('/')
def index():
    return f'PORT: {port}, PYTHON_VERSION: {python_version}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port) 