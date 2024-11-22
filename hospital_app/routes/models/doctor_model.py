from hospital_app import db 

class Doctor(db.model):
    
    __tablename__ = 'doctor'
    
    doctorID = db.column(db.Varchar(25),primary_key = True)
    doctorName = db.column(db.Char(20), nullable = False , unique = True)
    specialisation= db.column(db.Varchar(50), nullable = False)
    dept_name = db.column(db.Varchar(50), nullable = False, foreign_key = True)
    
    
