# hospital_app/routes/patient_routes.py
from flask import Blueprint, jsonify, request
from hospital_app.models.patient_model import Patient
from hospital_app import db

patient_bp = Blueprint('patient', __name__)

@patient_bp.route('/', methods=['GET'])
def get_patients():
    patients = Patient.query.all()
    return jsonify([{"patientID": p.patientID, "name": p.patient_name} for p in patients])

@patient_bp.route('/<patient_id>', methods=['GET'])
def get_patient(patient_id):
    patient = Patient.query.get_or_404(patient_id)
    return jsonify({"patientID": patient.patientID, "name": patient.patient_name})
