from flask import Blueprint, jsonify, request
from hospital_app.models.doctor_model import Doctor
from hospital_app import db

doctor_bp = Blueprint('doctor', __name__)

@doctor_bp.route('/', methods=['GET'])
def get_doctors():
    doctors = Doctor.query.all()
    return jsonify([{
        "doctorID": d.doctorID,
        "name": d.doctorName,
        "specialisation": d.specialisation,
        "dept_id": d.dept_id
    } for d in doctors])

@doctor_bp.route('/<doctor_id>', methods=['GET'])
def get_doctor(doctor_id):
    doctor = Doctor.query.get_or_404(doctor_id)
    return jsonify({
        "doctorID": doctor.doctorID,
        "name": doctor.doctorName,
        "specialisation": doctor.specialisation,
        "dept_id": doctor.dept_id
    })

@doctor_bp.route('/', methods=['POST'])
def add_doctor():
    data = request.json
    new_doctor = Doctor(**data)
    db.session.add(new_doctor)
    db.session.commit()
    return jsonify({"message": "Doctor added successfully!"}), 201
