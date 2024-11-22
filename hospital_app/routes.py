from flask import Blueprint

routes = Blueprint('routes', __name__)

@routes.route('/')
def home():
    return "Welcome to the Hospital App!"

@routes.route('/user')
def user():
    return "User Page"