const bcrypt = require('bcrypt');

class User {
    constructor(userId, username, passwordHash = "", decks = [], loggedIn = false) { 
        this.userId = userId;
        this.username = username;
        this.passwordHash = passwordHash;
        this.decks = decks;
        this.loggedIn = loggedIn;
    }

    async createAccount(username, password) {
        if (this.username && this.username === username) { 
            console.log("Username already taken.");
            return;
        }
        const salt = await bcrypt.genSalt(10);
        this.passwordHash = await bcrypt.hash(password, salt);
        this.username = username;
        console.log("Account created successfully!");
    }

    async login(username, password) {
        if (this.username !== username) {
            console.log('Username does not exist!');
            return;
        }
        const isMatch = await bcrypt.compare(password, this.passwordHash);
        if (isMatch) {
            this.loggedIn = true;
            console.log('Login successful!');
        } else {
            console.log('Incorrect password!');
        }
    }

    logout() {
        this.loggedIn = false;
        console.log('Logged out successfully.');
    }

    addDeck(deck) {
        this.decks.push(deck);
        console.log('Deck added.');
    }
}

module.exports = User;
