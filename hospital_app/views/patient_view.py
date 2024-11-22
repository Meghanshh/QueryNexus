# hospital_app/views/patient_view.py
class PatientView:
    @staticmethod
    def render_patient(patient):
        return {
            "patientID": patient.patientID,
            "patient_name": patient.patient_name,
            "DOB": patient.DOB.strftime('%Y-%m-%d'),
            "gender": patient.gender,
            "address": patient.address,
            "contactNo": patient.contactNo,
            "email": patient.email,
            "insurance_details": patient.insurance_details
        }
