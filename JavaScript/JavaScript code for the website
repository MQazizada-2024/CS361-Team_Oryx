// Setting up the basic class structure for the flashcard system

class Flashcard {
    constructor(id, question, answer, tags = [], contentType = 'text') {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.tags = tags;
        this.contentType = contentType;
    }
    
    editQuestion(newQuestion) {
        this.question = newQuestion;
    }
    
    editAnswer(newAnswer) {
        this.answer = newAnswer;
    }
    
    addTag(tag) {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
        }
    }
    
    removeTag(tag) {
        this.tags = this.tags.filter(t => t !== tag);
    }
}

class Deck {
    constructor(id, title, backgroundColor = '#ffffff') {
        this.id = id;
        this.title = title;
        this.flashcards = [];
        this.backgroundColor = backgroundColor;
    }
    
    addFlashcard(flashcard) {
        this.flashcards.push(flashcard);
    }
    
    removeFlashcard(flashcardId) {
        this.flashcards = this.flashcards.filter(f => f.id !== flashcardId);
    }
    
    shuffleDeck() {
        this.flashcards.sort(() => Math.random() - 0.5);
    }
}

class User {
    constructor(userId, username, passwordHash) {
        this.userId = userId;
        this.username = username;
        this.passwordHash = passwordHash;
        this.decks = [];
        this.loggedIn = false;
    }
    
    createAccount() {
        return new Promise(resolve => {
            // Simulate account creation
            console.log("Account created for", this.username);
            resolve(true);
        });
    }
    
    login(password) {
        return new Promise(resolve => {
            if (password === this.passwordHash) {
                this.loggedIn = true;
                console.log("Login successful");
                resolve(true);
            } else {
                console.log("Login failed");
                resolve(false);
            }
        });
    }
    
    logout() {
        this.loggedIn = false;
        console.log("User logged out");
    }
    
    addDeck(deck) {
        this.decks.push(deck);
    }
}

export { Flashcard, Deck, User };
