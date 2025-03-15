class Deck {
    constructor(id, title, flashcards = [], backgroundColor) {
        this.id = id;
        this.title = title;
        this.flashcards = flashcards;
        this.backgroundColor = backgroundColor;
    }

    addFlashcard(flashcard) {
        if (this.flashcards.length < 20) { // Fixed 'thisflashcards' typo
            this.flashcards.push(flashcard);
        } else {
            console.log('Deck can only contain up to 20 flashcards.');
        }
    }

    removeFlashcard(flashcard) {
        this.flashcards = this.flashcards.filter(fc => fc.id !== flashcard.id); // Fixed logic to remove by ID
    }

    shuffleDeck() {
        for (let i = this.flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
        }
    }

    saveToLibrary() {
        // Placeholder for database save logic
        console.log(`Deck '${this.title}' saved to library.`);
    }
}

module.exports = Deck;
