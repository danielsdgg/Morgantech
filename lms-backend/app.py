from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from models import db  

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize CORS
CORS(app)

# Initialize database and migration
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/courses', methods=['POST'])
def add_course():
    # You would typically handle your course creation logic here
    return 'Course added'

if __name__ == '__main__':
    app.run(port=5000)
