# app.py

import os
from flask import Flask, redirect, url_for, session, request, jsonify
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
import google.auth.transport.requests
from config import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI

app = Flask(__name__)
app.secret_key = os.urandom(24)  # Secret key for session management

# OAuth 2.0 setup
flow = Flow.from_client_secrets_file(
    'client_secret.json',
    scopes=['https://www.googleapis.com/auth/contacts.readonly'],
    redirect_uri=REDIRECT_URI
)

@app.route('/')
def index():
    return 'Google Contacts API Example'

# Step 1: Google OAuth login (Click "New Message" triggers this)
@app.route('/login')
def login():
    authorization_url, state = flow.authorization_url()
    session['state'] = state
    return redirect(authorization_url)

# Step 2: Handle OAuth callback and fetch contacts
@app.route('/oauth2callback')
def oauth2callback():
    flow.fetch_token(authorization_response=request.url)

    # Store credentials in the session
    credentials = flow.credentials
    session['credentials'] = credentials_to_dict(credentials)

    return redirect(url_for('get_contacts'))

# Step 3: Fetch contacts from Google People API
@app.route('/contacts')
def get_contacts():
    if 'credentials' not in session:
        return redirect('login')

    credentials = Credentials(**session['credentials'])

    # Fetch contacts from Google People API
    people_service = build('people', 'v1', credentials=credentials)
    results = people_service.people().connections().list(
        resourceName='people/me',
        personFields='names,emailAddresses',
    ).execute()

    contacts = results.get('connections', [])

    # Process contacts and return JSON
    contacts_list = []
    for person in contacts:
        names = person.get('names', [])
        email_addresses = person.get('emailAddresses', [])
        if names and email_addresses:
            contacts_list.append({
                'name': names[0].get('displayName'),
                'email': email_addresses[0].get('value')
            })

    return jsonify(contacts_list)

# Helper function to convert credentials to a dictionary
def credentials_to_dict(credentials):
    return {
        'token': credentials.token,
        'refresh_token': credentials.refresh_token,
        'token_uri': credentials.token_uri,
        'client_id': credentials.client_id,
        'client_secret': credentials.client_secret,
        'scopes': credentials.scopes
    }

if __name__ == '__main__':
    app.run('localhost', 5000, debug=True)
