import sys
import os
import json,imp,ast
import configparser
from functools import wraps

import flask_restplus
from bson import dumps

from flask import Blueprint, request, abort, Response, jsonify, url_for, session
from flask import current_app as app
from flask_restplus import Api, Resource, fields, reqparse
from models import db, ServerSummary

DEBUG = True

blueprint = Blueprint('mariadb',__name__,url_prefix='/api/mariadb')
api = Api(blueprint)
ns = api.namespace('mariadb',description='Simple Flask Ldap App')


HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0,HERE)
mod_path = os.path.join(HERE,'utils.py')
utils=imp.load_source("*",mod_path)

server_info_model = api.model("server_info_model", {
    "id": fields.Integer("id"),
    "hostname": fields.String("hostname"),
    "ip_address": fields.String("ip_address"),
    "environment": fields.String("environment"),
    "service_name": fields.String("service_name"),
    "last_updated": fields.String("last_updated")
})

@ns.route('/serverSummary')
class Home(Resource):
    def get(self,database=None):
        items=db.session.query(ServerSummary).all()
        results={};
        if(len(items)==1):
            results=ServerSummary.serialize(items[0])
        else:
            results = [ServerSummary.serialize(itm) for itm in items]
        resp=jsonify(results)
        resp.status_code=200
        return resp
    
    @api.expect(server_info_model)
    def post(self):
        try:
            if(request.query_string):
                q_params = utils.parse_qs_params(request.query_string)
            valuestr = json.dumps(request.get_json(),separators=(',',':'),sort_keys=True)
            item=json.loads(valuestr)
            s = ServerSummary()
            s.hostname= item['hostname']
            s.ip_address= item['ip_address']
            s.environment= item['environment']
            s.service_name= item['service_name']
            itm =db.session.add(s)
            db.session.commit()
            return Response(json.dumps(itm),200)
        except:
            raise
            #return Response("There was an error adding your item",status=500)

