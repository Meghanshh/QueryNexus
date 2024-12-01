from flask import Blueprint, request, jsonify
from controllers.patient_controller import PatientController
from flask_cors import CORS

patient_bp = Blueprint('patient', __name__, url_prefix='/api/patients')

@patient_bp.route('/', methods=['GET'])
def get_all_patients():
    try:
        return PatientController.get_all_patients()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@patient_bp.route('/<patientID>', methods=['GET'])
def get_patient(patientID): 
    try:
        return PatientController.get_patient(patientID)
    except Exception as e:
        return jsonify({"error": str(e)}), 404

@patient_bp.route('/', methods=['POST'])
def create_patient():
    try:
        data = request.get_json()
        return PatientController.create_patient(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@patient_bp.route('/<patientID>', methods=['PUT'])
def update_patient(patientID):
    try:
        data = request.get_json()
        return PatientController.update_patient(patientID, data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@patient_bp.route('/<patientID>', methods=['DELETE'])
def delete_patient(patientID):
    try:
        return PatientController.delete_patient(patientID)
    except Exception as e:
        return jsonify({"error": str(e)}), 400
