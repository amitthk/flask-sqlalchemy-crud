import sys
import os
import json
import configparser
from functools import wraps

import flask_restplus

from flask import Flask, request, abort, Response, jsonify, url_for, session
from flask_restplus import Api, Resource, fields, reqparse
from auth.AuthApi import blueprint as auth_blueprint
from vault.VaultUserApi import blueprint as vault_user_blueprint
from mariadb.MariadbApi import blueprint as mariadb_api_blueprint
from mariadb.models import db as s_db

DEBUG = True

app = Flask(__name__,instance_relative_config=True)
app.config.from_object(__name__)
app.config.from_pyfile('app.cfg')
s_db.init_app(app)
with app.app_context():
    s_db.create_all()

config = configparser.ConfigParser

api = Api(app, version='1.0', title='Simple Ldap App', description = 'Simple Flask Ldap App')
app.register_blueprint(auth_blueprint)
app.register_blueprint(vault_user_blueprint)
app.register_blueprint(mariadb_api_blueprint)

if __name__=="__main__":
    app.run(host='0.0.0.0')