from flask import Flask, render_template, request
from schemes import schemes
app = Flask(__name__)

# Sample scholarship data for testing
schemes = [
    {
        "name": "National Scholarship Portal Schemes",
        "description": "Explore scholarships offered through the National Scholarship Portal.",
        "max_income": 250000,
        "degrees": ["B.Tech", "B.Sc", "B.Com", "B.A", "Other"],
        "documents": [
            "Aadhaar or accepted identity proof",
            "Income certificate, if required",
            "Previous academic marksheet",
            "Bank account details"
        ],
        "link": "https://scholarships.gov.in/"
    },
    {
        "name": "AICTE Pragati Scholarship",
        "description": "Scholarship for eligible girl students pursuing technical education.",
        "max_income": 800000,
        "degrees": ["B.Tech"],
        "documents": [
            "Academic marksheet",
            "Family income certificate",
            "Admission details",
            "Bank account details"
        ],
        "link": "https://www.aicte-india.org/"
    }
]


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/find", methods=["POST"])
def find():
    name = request.form.get("name", "Student").strip()
    degree = request.form.get("degree", "")
    
    try:
        income = float(request.form.get("income", "0"))
        if income < 0:
            raise ValueError
    except ValueError:
        return "Please enter a valid family income.", 400

    matches = []

    for scheme in schemes:
        if (
            degree in scheme["degrees"]
            and income <= scheme["max_income"]
        ):
            matches.append(scheme)

    return render_template(
        "results.html",
        name=name,
        degree=degree,
        matches=matches
    )
@app.route("/schemes")
def show_schemes():
    return render_template("schemes.html", schemes=schemes)


if __name__ == "__main__":
    app.run(debug=True)