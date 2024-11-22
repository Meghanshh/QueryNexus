from hospital_app import db

class Consultation(db.Model):
    __tablename__ = 'consultation'
    app_id = db.Column(db.String(50), primary_key=True)
    app_date = db.Column(db.Date, nullable=False)
    app_time = db.Column(db.Time, nullable=False)
    total_amount = db.Column(db.Numeric(10, 4), nullable=False)
    recordID = db.Column(db.String(250), nullable=False)
    diagnosis = db.Column(db.String(50))
    treatment = db.Column(db.String(250))
    prescription = db.Column(db.String(250))
    record_date = db.Column(db.Date, nullable=False)
    patientID = db.Column(db.String(50), db.ForeignKey('patient.patientID'))
    doctorID = db.Column(db.String(20), db.ForeignKey('doctor.doctorID'))