from flask import Blueprint, jsonify, request
from hospital_app.models.consultation_model import Consultation
from hospital_app import db

consultation_bp = Blueprint('consultation', __name__)

@consultation_bp.route('/', methods=['GET'])
def get_consultations():
    consultations = Consultation.query.all()
    return jsonify([{
        "app_id": c.app_id,
        "app_date": str(c.app_date),
        "app_time": str(c.app_time),
        "total_amount": float(c.total_amount),
        "diagnosis": c.diagnosis,
        "patientID": c.patientID,
        "doctorID": c.doctorID
    } for c in consultations])

@consultation_bp.route('/<app_id>', methods=['GET'])
def get_consultation(app_id):
    consultation = Consultation.query.get_or_404(app_id)
    return jsonify({
        "app_id": consultation.app_id,
        "app_date": str(consultation.app_date),
        "app_time": str(consultation.app_time),
        "total_amount": float(consultation.total_amount),
        "diagnosis": consultation.diagnosis,
        "patientID": consultation.patientID,
        "doctorID": consultation.doctorID
    })

@consultation_bp.route('/', methods=['POST'])
def add_consultation():
    data = request.json
    new_consultation = Consultation(**data)
    db.session.add(new_consultation)
    db.session.commit()
    return jsonify({"message": "Consultation added successfully!"}), 201
