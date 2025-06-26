import spotipy
import os
from spotipy.oauth2 import SpotifyOAuth
from flask import session

def get_spotify_client():
    token_info = session.get("token_info")
    if not token_info:
        return None
    return spotipy.Spotify(auth=token_info["access_token"])

sp_oauth = SpotifyOAuth(
    scope="playlist-read-private playlist-modify-private playlist-modify-public user-read-private user-library-read streaming user-read-playback-state user-modify-playback-state",
    redirect_uri=os.getenv("SPOTIPY_REDIRECT_URI"),
    client_id=os.getenv("SPOTIPY_CLIENT_ID"),
    client_secret=os.getenv("SPOTIPY_CLIENT_SECRET")
)