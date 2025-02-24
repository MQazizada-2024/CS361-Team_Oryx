class CardManager{
    constructor(currentDeck = [], currentIndex = 0){
        this.currentDeck = currentDeck;
        this.currentIndex = currentIndex;
        this.isFlipped = false;
        this.isSessionActive = false;
    }
    startSession(deck){
        if(!deck || deck.length === 0){
            console.log("The deck is empty.");
            return;
        }
        this.currentDeck = deck;
        this.currentIndex = 0;
        this.isFlipped = false;
        this.isSessionActive = true;
        console.log("Session started.")
    }
    nextFlashcard(){
        if(!this.isSessionActive){
            console.log("Start session first.");
            return;
        }
        if (this.currentIndex < this.currentDeck.length - 1){
            this.currentIndex++;
            this.isFlipped = false;
        }else {
            console.log("You have reached the end of the deck.");
        }
    }
    previousFlashcard(){
            if(!this.isSessionActive){
                console.log("Start session first.");
                return;
            }
            if (this.currentIndex > 0){
                this.currentIndex--;
                this.isFlipped = false;
            } else{
                console.log("You are at the beginnig of the deck.")
            }
    }
    flipFlashcard(){
        if(!this.isSessionActive){
            console.log("Start session first.");
            return;
        }
        this.isFlipped = !this.isFlipped;
    }
    resetSession(){
        this.currentIndex = 0;
        this.isFlipped = false;
        console.log("Session reset.");
    }
}
mudule.exports = CardManager;