from flask import *
import pymysql
from app import app, db, socketio

import os

app = Flask(__name__)
app.secret_key = ""

@app.route('/messages', methods = ["GET", "POST"])
def index():
    if request.method == 'POST':
        username = request.form['username']

        user = user.query.filter_by(username = username).first()
        if user:
            session['username'] = username
            return redirect(url_for('chat'))
    return render_template('index.html')
        

@app.route('/chats', methods=['GET'])
def chats():
    if 'username' not in session:
        return redirect(url_for('index'))  # Redirect to login page if not logged in

    user = User.query.filter_by(username=session['username']).first()
    if not user:
        return redirect(url_for('index'))  # Redirect if user not found

    messages = Message.query.order_by(Message.timestamp.asc()).all()  # Fetch all messages sorted by time
    chat_data = [{'user': message.user.username, 'content': message.content, 'timestamp': message.timestamp} for message in messages]

    return render_template('chats.html', messages=chat_data)


# Fetching chat messages for a specific user (optional route for future use)
@app.route('/chats/<username>', methods=['GET'])
def get_user_chats(username):
    user = User.query.filter_by(username=username).first()
    if user:
        messages = Message.query.filter_by(user_id=user.id).order_by(Message.timestamp.asc()).all()
        chat_data = [{'user': user.username, 'content': message.content, 'timestamp': message.timestamp} for message in messages]
        return jsonify(chat_data)
    else:
        return jsonify({'error': 'User not found'}), 404
    
   
   
@app.route('/status', methods= ['GET', 'POST'])
def chat():
   
    return render_template('status.html',)



@app.route('/settings', methods= ['GET', 'POST'])
def chat():
   
    return render_template('settings.html',)



@app.route('/profile', methods= ['GET', 'POST'])
def chat():
   
    return render_template('profile.html',)



if "__main__" == __name__:
    app.run(debug=True)