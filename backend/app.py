import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from flask import Flask, session, request, redirect, url_for, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.secret_key = os.urandom(24)

app.config['SESSION_COOKIE_NAME'] = 'spotify-login-session'
app.config['SESSION_PERMANENT'] = False

@app.route('/')
def login():
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)

@app.route('/callback')
def callback():
    session.clear()
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    session['token_info'] = token_info
    return redirect(url_for('profile'))

@app.route('/profile')
def profile():
    token_info = session.get('token_info', None)
    if not token_info:
        return redirect(url_for('login'))

    sp = spotipy.Spotify(auth=token_info['access_token'])
    playlists = sp.current_user_playlists()
    return render_template('home.html', playlists=playlists['items'])

if __name__ == "__main__":
    app.run(debug=True)