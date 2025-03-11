from flask import request, jsonify
from flask_restful import Resource
import mysql.connector
import datetime;

__verbose__ = True

def CreateConnection():
    if (__verbose__):
        print("Creating database connection...")

    return mysql.connector.connect(
        host='127.0.0.1',
        user='root',
        password='Murphy115!',
        database='DRABT_Cards'
    )

class GetCard(Resource):        
    # Fetch card data from database
    def get(self):
        connection = CreateConnection()
        cursor = connection.cursor(dictionary = True)
        result = ""
        card = ""

        if (__verbose__):
            print("Feting card from database...")

        cursor.execute("SELECT card FROM cards ORDER BY RAND() LIMIT 1")
        result = cursor.fetchone()
        card = result['card']
        cursor.close()
        connection.close()

        if (__verbose__):
            print("Returning card:", card)

        return jsonify(card=card)

class GetDeck(Resource):        
    # Fetch card data from database
    def get(self):
        return

class GetFlashcard(Resource):        
    # Fetch card data from database
    def get(self):
        return

class ValidateUser():
    # Validate user login credentials.
    def login(self):
        name = str(request.args.get("name"))
        password = str(request.args.get("password"))
        connection = CreateConnection()
        cursor = connection.cursor(dictionary = True)
        result = ""

        if (__verbose__):
            print("Validating user credentials: ", name)

        cursor.execute("SELECT COUNT(*) as count FROM user WHERE name = %s", (name,))
        result = cursor.fetchone()
        cursor.close()
        connection.close()

        if result['count'] > 0:
            if (__verbose__):
                print(name, " is found!")

            return jsonify(valid = True)
        
        if (__verbose__):
            print(name, " is missing!")

        return jsonify(valid = False)

class RegisterUser():
    def Register(self):
        # Register new user.
        return

class SubmitCard(Resource):
    # Add to or modify Card database.
    def post(self):
        owner = str(request.args.get("owner"))
        text = str(request.args.get("text"))
        image = str(request.args.get("image"))
        connection = CreateConnection()
        cursor = connection.cursor(dictionary=True)

        if (__verbose__):
            print(f"Submitting card ownder={owner}: text={text}, image={image}")

        # Insert or update the cards table
        cursor.execute("INSERT INTO stats (owner, text, image) VALUES (%s, %s, %s)"
                       "ON DUPLICATE KEY UPDATE owner = %s, text = %s, image = %s",
                       (owner, text, image))
        
        connection.commit()
        cursor.close()
        connection.close()

class SubmitDeck(Resource):
    # Add to or modify Deck database.
    def post(self):
        return

class SubmitFlashcard(Resource):
    # Add to or modify Flashcard database.
    def post(self):
        return
