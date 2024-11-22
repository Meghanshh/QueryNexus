from hospital_app import db

class Department(db.Model):
    __tablename__ = 'department'
    dept_ID = db.Column(db.String(25), primary_key=True)
    dept_name = db.Column(db.String(50), unique=True, nullable=False)