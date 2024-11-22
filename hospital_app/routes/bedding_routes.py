from flask import Blueprint, jsonify, request
from hospital_app.models.bedding_model import Bedding
from hospital_app import db

bedding_bp = Blueprint('bedding', __name__)

@bedding_bp.route('/', methods=['GET'])
def get_beddings():
    beddings = Bedding.query.all()
    return jsonify([{
        "bed_id": b.bed_id,
        "bed_type": b.bed_type,
        "bed_status": b.bed_status,
        "patientID": b.patientID,
        "admission_date": str(b.admission_date) if b.admission_date else None,
        "discharge_date": str(b.discharge_date) if b.discharge_date else None,
        "cleaning_status": b.cleaning_status,
        "last_cleaned": str(b.last_cleaned) if b.last_cleaned else None
    } for b in beddings])

@bedding_bp.route('/<bed_id>', methods=['GET'])
def get_bedding(bed_id):
    bedding = Bedding.query.get_or_404(bed_id)
    return jsonify({
        "bed_id": bedding.bed_id,
        "bed_type": bedding.bed_type,
        "bed_status": bedding.bed_status,
        "patientID": bedding.patientID,
        "admission_date": str(bedding.admission_date) if bedding.admission_date else None,
        "discharge_date": str(bedding.discharge_date) if bedding.discharge_date else None,
        "cleaning_status": bedding.cleaning_status,
        "last_cleaned": str(bedding.last_cleaned) if bedding.last_cleaned else None
    })

@bedding_bp.route('/', methods=['POST'])
def add_bedding():
    data = request.json
    new_bedding = Bedding(**data)
    db.session.add(new_bedding)
    db.session.commit()
    return jsonify({"message": "Bedding added successfully!"}), 201
