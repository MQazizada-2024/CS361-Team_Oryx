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
        word = ""

        if (__verbose__):
            print("Feting word from dictionary...")

        cursor.execute("SELECT word FROM valid_words ORDER BY RAND() LIMIT 1")
        result = cursor.fetchone()
        word = result['word'].upper()
        cursor.close()
        connection.close()

        if (__verbose__):
            print("Returning secret word:", word)

        return jsonify(word=word)

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
        word = str(request.args.get("word"))
        connection = CreateConnection()
        cursor = connection.cursor(dictionary = True)
        result = ""

        if (__verbose__):
            print("Validating word from dictionary: ", word)

        cursor.execute("SELECT COUNT(*) as count FROM valid_words WHERE word = %s", (word,))
        result = cursor.fetchone()
        cursor.close()
        connection.close()

        if result['count'] > 0:
            if (__verbose__):
                print(word, " is valid!")

            return jsonify(valid = True)
        
        if (__verbose__):
            print(word, " not found!")

        return jsonify(valid = False)

class RegisterUser():
    def Register(self):
        # Register new user.
        return

class SubmitCard(Resource):
    # Add to or modify Card database.
    def post(self):
        userID = str(request.args.get("userID"))
        games = str(request.args.get("games"))
        wins = str(request.args.get("wins"))
        streak = str(request.args.get("streak"))
        winner = str(request.args.get("wonGame"))
        wonGame = 0
        connection = CreateConnection()
        cursor = connection.cursor(dictionary=True)
        
        if (winner):
            wonGame = 1

        if (__verbose__):
            print(f"Submitting stats for user {userID}: wins={wins}, games={games}, streak={streak}, winner={wonGame}")

        # Insert or update the user_stats table
        cursor.execute("INSERT INTO stats (userID, wins, games, streak, wonGame) VALUES (%s, %s, %s, %s, %s)"
                       "ON DUPLICATE KEY UPDATE wins = %s, games = %s, streak = %s, wonGame = %s",
                       (userID, wins, games, streak, wonGame, wins, games, streak, wonGame))
        
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
