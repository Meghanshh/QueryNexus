from hospital_app import db

class Bedding(db.Model):
    __tablename__ = 'bedding'
    bed_id = db.Column(db.Integer, primary_key=True)
    bed_type = db.Column(db.String(50))
    bed_status = db.Column(db.String(20))
    patientID = db.Column(db.String(20), db.ForeignKey('patient.patientID'))
    admission_date = db.Column(db.Date)
    discharge_date = db.Column(db.Date)
    cleaning_status = db.Column(db.String(20))
    last_cleaned = db.Column(db.Date)