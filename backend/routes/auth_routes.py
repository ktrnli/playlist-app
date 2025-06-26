from flask import Blueprint, redirect, session, request, url_for
from spotify import sp_oauth

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/")
def login():
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)

@auth_bp.route("/callback")
def callback():
    code = request.args.get("code")
    token_info = sp_oauth.get_access_token(code)
    session["token_info"] = token_info
    return redirect(url_for("playlist.my_playlists"))