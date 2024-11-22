from hospital_app.models.doctor_model import Doctor
from hospital_app import db

def get_all_doctors():
    return Doctor.query.all()

def get_doctor_by_id(doctor_id):
    return Doctor.query.get(doctor_id)

def add_doctor(data):
    new_doctor = Doctor(**data)
    db.session.add(new_doctor)
    db.session.commit()
    return new_doctor

def update_doctor(doctor_id, data):
    doctor = get_doctor_by_id(doctor_id)
    if not doctor:
        return None
    for key, value in data.items():
        setattr(doctor, key, value)
    db.session.commit()
    return doctor

def delete_doctor(doctor_id):
    doctor = get_doctor_by_id(doctor_id)
    if not doctor:
        return None
    db.session.delete(doctor)
    db.session.commit()
    return doctor
