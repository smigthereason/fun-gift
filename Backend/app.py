
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from models import db
from routes import routes

app = Flask(__name__)

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gift.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = "hdsdvdysdhsdfsdsdhshhdhsd" # Add a JWT secret key

db.init_app(app)
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

# Register Blueprint
app.register_blueprint(routes)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
