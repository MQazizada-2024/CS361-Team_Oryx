class Main {
    constructor(decks = [], cardManager = new CardManager(), user = null) {
        this.decks = decks;
        this.cardManager = cardManager;
        this.user = user;
    }
    initApp() {
        console.log('App initialized.');
    }
    createDeck(title){
        const deck = new Deck(this.decks.length, title);
        this.decks.push(deck);
        console.log('Deck created.');
    }
    deleteDeck(deckId){
        this.decks = this.decks.filter(deck => deck.id !== deckId);
        console.log('Deck deleted.');
    }
    startSession(deckId){
        const deck = this.decks.find(deck => deck.id === deckId);
        this.cardManager.startSession(deck);
    }
    nextFlashcard(){
        this.cardManager.nextFlashcard();
    }
    previousFlashcard(){
        this.cardManager.previousFlashcard();
    }
    flipFlashcard(){
        this.cardManager.flipFlashcard();
    }
    resetSession(){
        this.cardManager.resetSession();
    }
    createAccount(username, password){
        this.user = new User(this.user, username);
        this.user.createAccount(username, password);
    }
    login(username, password){
        this.user.login(username, password);
    }
    logout(){
        this.user.logout();
    }

    };
