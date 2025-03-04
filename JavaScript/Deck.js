class Deck{
    constructor(id, title, flashcards = [], backgroundColor){
        this.id = id;
        this.title = title;
        this.flashcards = flashcards;
        this.backgroundColor = backgroundColor;

    }
    addFlashcard(flashcard){
        if(thisflashcards.length < 20){
            this.flashcards.push(flashcard);
        }else{
            console.log('Deck can only contain up to 20 flashcards.');
        }
    }
    removeFlashcard(flashcard){
        this.flashcards = this.flashcards.filter(fc => fc.id !== flashcard);
    }
    shuffleDeck(){
        for (let i = this.flashcards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
        }
    }
    saveToLibrary(){
        //need to access the database here and save the deck.
        console.log(`Deck '${this.title}' saved to library.`);
    }

}
module.exports = Deck;