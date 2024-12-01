import os
# from dotenv import load_dotenv

# load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'mysql://root:LiveLifeLoud1234@localhost/hospital')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = ('your_secret_key')