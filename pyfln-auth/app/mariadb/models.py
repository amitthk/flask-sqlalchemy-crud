from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from sqlalchemy import DateTime, Column, Integer, String, inspect


db = SQLAlchemy()

class Serializer():
    @staticmethod
    def dump_datetime(value):
        if value is None:
            return None
        return(value.strftime("%Y%m%d%H%M%S"))

class ServerSummary(db.Model):
    __tablename__='server_summary'
    id=db.Column(db.Integer, primary_key=True)
    hostname=db.Column(db.String(255),nullable=False,unique=True)
    ip_address=db.Column(db.String(255),nullable=False,unique=True)
    environment=db.Column(db.String(255),nullable=False,unique=True)
    service_name=db.Column(db.String(255),nullable=False,unique=True)
    last_updated=db.Column(DateTime(timezone=True),nullable=False,server_default=func.now())

    @staticmethod
    def serialize(item):
        return {
            'id': item.id,
            'hostname': item.hostname,
            'ip_address': item.ip_address,
            'environment': item.environment,
            'service_name': item.service_name,
            'last_updated': item.last_updated
        }

