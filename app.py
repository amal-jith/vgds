from flask import Flask, request, render_template

app = Flask(__name__)
app.debug=True

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/presentation-design")
def presentation():
    return render_template("presentation-design.html")

@app.route("/graphic-print-design")
def graphic():
    return render_template("graphics.html")

@app.route("/other")
def presentation():
    return render_template("other.html")

@app.route("/solutions")
def solutions():
    return render_template("solutions.html")



app.run(host='0.0.0.0', port=443)
