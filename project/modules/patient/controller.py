from flask import jsonify
from .service import PatientService

class PatientController:
    @staticmethod
    def get_all_patients():
        patients = PatientService.get_all_patients()
        return jsonify([patient.to_dict() for patient in patients])
    
    @staticmethod
    def get_patient(patientID):
        patient = PatientService.get_patient_by_id(patientID)
        return jsonify(patient.to_dict())
    
    @staticmethod
    def create_patient(data):
        patient = PatientService.create_patient(data)
        return jsonify(patient.to_dict()), 201
    
    @staticmethod
    def update_patient(patientID, data):
        patient = PatientService.update_patient(patientID, data)
        return jsonify(patient.to_dict())
    
    @staticmethod
    def delete_patient(patientID):
        PatientService.delete_patient(patientID)
        return '', 204