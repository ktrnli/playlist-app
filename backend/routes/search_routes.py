from flask import Blueprint, request, jsonify
from spotify import get_spotify_client

search_bp = Blueprint("search", __name__)

@search_bp.route("/search")
def search_tracks():
    query = request.args.get("q")
    sp = get_spotify_cleint()
    results = sp.search(q=query, type="track", limit=10)
    return jsonify(results["tracks"]["items"])

