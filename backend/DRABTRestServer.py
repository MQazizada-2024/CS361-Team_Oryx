from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
import mysql.connector
from uuid import uuid1
import DRABTDatabase

__verbose__ = True

class DRABTServer:
    def __init__(self):
        self.server = Flask(__name__)
        CORS(self.server)
        self.api = Api(self.server)

        self.api.add_resource(DRABTServer.GenerateGuestUUID, '/api/GenerateGuestUUID')
        self.api.add_resource(DRABTDatabase.ValidateUser, '/api/ValidateUser')
        self.api.add_resource(DRABTDatabase.RegisterUser, '/api/RegisterUser')
        self.api.add_resource(DRABTDatabase.GetCard, '/api/GetCard')
        self.api.add_resource(DRABTDatabase.GetDeck, '/api/GetDeck')
        self.api.add_resource(DRABTDatabase.GetFlashcard, '/api/GetFlashcard')
        self.api.add_resource(DRABTDatabase.SubmitCard, '/api/SubmitCard')
        self.api.add_resource(DRABTDatabase.SubmitFlashcard, '/api/SubmitFlashCard')
        self.api.add_resource(DRABTDatabase.SubmitDeck, '/api/SubmitDeck')
        self.server.run(host='0.0.0.0', debug=True)
    
    class GenerateGuestUUID(Resource):
        # Generate a unique ID for guest users.
        def get(self):
            uuid = uuid1()

            if (__verbose__):
                print("New User ID is:", uuid)

            return jsonify(uuid=uuid)
                
if __name__ == '__main__':
    DRABT = DRABTServer()
