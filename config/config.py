from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config.config import Config

# Initialize database and migration objects
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions with the app instance
    db.init_app(app)
    migrate.init_app(app, db)

    # Import and register blueprints
    from .routes.patient_routes import patient_bp
    from .routes.doctor_routes import doctor_bp
    from .routes.department_routes import department_bp
    from .routes.bedding_routes import bedding_bp
    from .routes.consultation_routes import consultation_bp

    app.register_blueprint(patient_bp, url_prefix='/api/patient')
    app.register_blueprint(doctor_bp, url_prefix='/api/doctor')
    app.register_blueprint(department_bp, url_prefix='/api/department')
    app.register_blueprint(bedding_bp, url_prefix='/api/bedding')
    app.register_blueprint(consultation_bp, url_prefix='/api/consultation')

    return app