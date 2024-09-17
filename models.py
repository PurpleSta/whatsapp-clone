from app import db  # Import the db object from your Flask app
from datetime import datetime

# Define the User model
class User(db.Model):
    __tablename__ = 'users'  # Optional: specify the table name

    # Fields for the User table
    id = db.Column(db.Integer, primary_key=True)  # Primary key, auto-increment
    username = db.Column(db.String(150), unique=True, nullable=False)  # Username, must be unique
    password = db.Column(db.String(150), nullable=False)  # Password (in a real app, hash this!)

    # One-to-many relationship with Message
    messages = db.relationship('Message', backref='user', lazy=True)

    def __repr__(self):
        return f"<User {self.username}>"

# Define the Message model
class Message(db.Model):
    __tablename__ = 'messages'  # Optional: specify the table name

    # Fields for the Message table
    id = db.Column(db.Integer, primary_key=True)  # Primary key, auto-increment
    content = db.Column(db.String(500), nullable=False)  # Message content
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)  # Time message was sent

    # Foreign key linking each message to a specific user
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def __repr__(self):
        return f"<Message {self.content} by {self.user.username} at {self.timestamp}>"
