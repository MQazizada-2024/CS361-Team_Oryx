from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
import mysql.connector
from uuid import uuid1
import WordleDatabase

__verbose__ = True

class WordleServer:
    def __init__(self):
        self.server = Flask(__name__)
        CORS(self.server)
        self.api = Api(self.server)

        self.api.add_resource(WordleDatabase.GetWord, '/api/GetWord')
        self.api.add_resource(WordleServer.GenerateUUID, '/api/GenerateUUID')
        self.api.add_resource(WordleDatabase.ValidateWord, '/api/ValidateWord')
        self.api.add_resource(WordleDatabase.FetchStats, '/api/FetchStats')
        self.api.add_resource(WordleDatabase.SubmitStats, '/api/SubmitStats')
        self.server.run(host='0.0.0.0', debug=True)
    
    class GenerateUUID(Resource):
        def get(self):
            uuid = uuid1()

            if (__verbose__):
                print("New User ID is:", uuid)

            return jsonify(uuid=uuid)
                
if __name__ == '__main__':
    Wordle = WordleServer()
