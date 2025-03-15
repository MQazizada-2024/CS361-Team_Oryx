class CardManager {
    constructor(currentDeck = [], currentIndex = 0) {
        this.currentDeck = currentDeck;
        this.currentIndex = currentIndex;
        this.isFlipped = false;
        this.isSessionActive = false;
    }

    startSession(deck) {
        if (!deck || !deck.flashcards || deck.flashcards.length === 0) { 
            console.log("The deck is empty.");
            return;
        }
        this.currentDeck = deck.flashcards; // Assign the flashcards array
        this.currentIndex = 0;
        this.isFlipped = false;
        this.isSessionActive = true;
        console.log("Session started.");
    }

    nextFlashcard() {
        if (!this.isSessionActive) {
            console.log("Start session first.");
            return;
        }
        if (this.currentIndex < this.currentDeck.length - 1) {
            this.currentIndex++;
            this.isFlipped = false;
        } else {
            console.log("You have reached the end of the deck.");
        }
    }

    previousFlashcard() {
        if (!this.isSessionActive) {
            console.log("Start session first.");
            return;
        }
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.isFlipped = false;
        } else {
            console.log("You are at the beginning of the deck."); // Fixed typo
        }
    }

    flipFlashcard() {
        if (!this.isSessionActive) {
            console.log("Start session first.");
            return;
        }
        this.isFlipped = !this.isFlipped;
    }

    resetSession() {
        this.currentIndex = 0;
        this.isFlipped = false;
        console.log("Session reset.");
    }
}

module.exports = CardManager;
