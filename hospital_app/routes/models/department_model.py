from hospital_app import db

class Department(db.model):
    
    __tablename__ = 'department'
    
    bed_id = db.column(db.Int, primary_key = True)
    bed_type = db.column(db.Varchar(50))
    bed_status = db.column(db.Varchar(20))
    patientID = db.column(db.Varchar(50))
    admission_date = db.column(db.Date)
    discharge_dtae = db.column(db.Date)
    cleaning_status = db.column(db.Varchar(20))
    last_cleaned = db.column(db.Date)
    