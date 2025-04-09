from flask import Flask, request, render_template

app = Flask(__name__)
app.debug=True

@app.route("/")
def home():
    return render_template("home.html")



app.run(host='0.0.0.0', port=443)
