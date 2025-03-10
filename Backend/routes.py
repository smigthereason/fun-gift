from flask import Blueprint, request, jsonify
from models import db, User, Card, Schedule
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from flask_bcrypt import Bcrypt

routes = Blueprint('routes', __name__)
bcrypt = Bcrypt()  # Initialize bcrypt here to avoid import issues later

@routes.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(username=data['username'], password=hashed_password)

    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@routes.route('/cards', methods=['POST'])
@jwt_required()
def create_card():
    data = request.get_json()
    new_card = Card(
        category=data['category'], amount=data['amount'],
        message=data['message'], email=data['email'],
        recipient_email=data['recipient_email'], user_id=data['user_id']
    )
    db.session.add(new_card)
    db.session.commit()
    return jsonify({'message': 'Card created successfully'}), 201

@routes.route('/schedule', methods=['POST'])
@jwt_required()
def create_schedule():
    data = request.get_json()
    new_schedule = Schedule(
        date=data['date'], time=data['time'], user_id=data['user_id']
    )
    db.session.add(new_schedule)
    db.session.commit()
    return jsonify({'message': 'Schedule created successfully'}), 201
