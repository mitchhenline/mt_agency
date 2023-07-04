"""Server File"""
from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/pizzaeaten')
def pizza_eaten():
    return render_template('pizza_eaten.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
