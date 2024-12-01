from flask import Blueprint, request
from .controller import PatientController

patient_bp = Blueprint('patient', __name__)

@patient_bp.route('/', methods=['GET'])
def get_all_patients():
    return PatientController.get_all_patients()

@patient_bp.route('/<patientID>', methods=['GET'])
def get_patient(patientID):
    return PatientController.get_patient(patientID)

@patient_bp.route('/', methods=['POST'])
def create_patient():
    data = request.get_json()
    return PatientController.create_patient(data)

@patient_bp.route('/<patientID>', methods=['PUT'])
def update_patient(patientID):
    data = request.get_json()
    return PatientController.update_patient(patientID, data)

@patient_bp.route('/<patientID>', methods=['DELETE'])
def delete_patient(patientID):
    return PatientController.delete_patient(patientID)