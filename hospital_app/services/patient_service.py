from hospital_app.models.patient_model import Patient
from hospital_app import db

def get_all_patients():
    return Patient.query.all()

def get_patient_by_id(patient_id):
    return Patient.query.get(patient_id)

def add_patient(data):
    new_patient = Patient(**data)
    db.session.add(new_patient)
    db.session.commit()
    return new_patient

def update_patient(patient_id, data):
    patient = get_patient_by_id(patient_id)
    if not patient:
        return None
    for key, value in data.items():
        setattr(patient, key, value)
    db.session.commit()
    return patient

def delete_patient(patient_id):
    patient = get_patient_by_id(patient_id)
    if not patient:
        return None
    db.session.delete(patient)
    db.session.commit()
    return patient 
