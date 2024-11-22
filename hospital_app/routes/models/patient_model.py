# hospital_app/models/patient_model.py
from hospital_app import db

class Patient(db.Model):
    __tablename__ = 'patient'

    patientID = db.Column(db.String(50), primary_key=True)
    patient_name = db.Column(db.String(20), nullable=False)
    DOB = db.Column(db.Date, nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(50))
    contactNo = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(20), unique=True)
    insurance_details = db.Column(db.String(250))
