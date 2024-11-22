import os
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hospital.db'  # Adjust the path if needed
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database object
db = SQLAlchemy(app)

# Define models (example: Patient)
class Patient(db.Model):
    patientID = db.Column(db.String(20), primary_key=True)
    patient_name = db.Column(db.String(50), nullable=False)
    DOB = db.Column(db.Date, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    address = db.Column(db.String(100), nullable=True)
    contactNo = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=True)
    insurance_details = db.Column(db.String(250), nullable=True)

# Add other models here, e.g., Consultation, Bedding, Doctor...

# Use @app.before_request to create tables if the database doesn't exist
@app.before_request
def create_tables():
    if not os.path.exists('hospital.db'):  # Check if the database file exists
        db.create_all()  # Create tables

# Example route
@app.route('/')
def index():
    patients = Patient.query.all()
    return render_template('index.html', patients=patients)

if __name__ == '__main__':
    app.run(debug=True)
