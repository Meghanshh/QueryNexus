from flask import Blueprint, jsonify, request
from hospital_app.models.department_model import Department
from hospital_app import db

department_bp = Blueprint('department', __name__)

@department_bp.route('/', methods=['GET'])
def get_departments():
    departments = Department.query.all()
    return jsonify([{
        "dept_ID": d.dept_ID,
        "dept_name": d.dept_name
    } for d in departments])

@department_bp.route('/<dept_id>', methods=['GET'])
def get_department(dept_id):
    department = Department.query.get_or_404(dept_id)
    return jsonify({
        "dept_ID": department.dept_ID,
        "dept_name": department.dept_name
    })

@department_bp.route('/', methods=['POST'])
def add_department():
    data = request.json
    new_department = Department(**data)
    db.session.add(new_department)
    db.session.commit()
    return jsonify({"message": "Department added successfully!"}), 201
