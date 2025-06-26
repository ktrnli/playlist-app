from flask import Blueprint, request, jsonify
from spotify import get_spotify_client

playlist_bp = Blueprint("playlist", __name__)

@playlist_bp.route("/create_playlist", methods=["POST"])
def create_playlist():
    sp = get_spotify_client()
    user_id = sp.me()["id"]
    data = request.get_json()
    playlist = sp.user_playlist_create(
        user=user_id,
        name=data["name"],
        description=data["description"],
        public=False
    )
    return jsonify(playlist)

@playlist_bp.route("/add_song", methods=["POST"])
def add_song():
    sp = get_spotify_client()
    data = request.get_json()
    sp.playlist_add_items(data["playlist_id"], [data["track_uri"]])
    return jsonify({"status": "added"})

@playlist_bp.route("/remove_song", methods=["POST"])
def remove_song():
    sp = get_spotify_client()
    data = request.get_json()
    sp.playlist_remove_all_occurrences_of_items(data["playlist_id"], [data["track_uri"]])
    return jsonify({"status": "removed"})

@playlist_bp.route("/delete_playlist", methods=["POST"])
def delete_playlist():
    sp = get_spotify_client()
    playlist_id = request.get_json()["playlist_id"]
    sp.current_user_unfollow_playlist(playlist_id)
    return jsonify({"status": "deleted"})

@playlist_bp.route("/my_playlists")
def my_playlists():
    sp = get_spotify_client()
    playlists = sp.current_user_playlists()
    return jsonify(playlists["items"])