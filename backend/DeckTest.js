const Deck = require('./Deck'); // Adjust path if necessary

test('Deck class methods should work', () => {
    const deck = new Deck(1, 'Math Deck');
    const flashcard = { id: 1, question: 'What is 2+2?', answer: '4' };

    // Test addFlashcard
    deck.addFlashcard(flashcard);
    expect(deck.flashcards.length).toBe(1);

    // Test removeFlashcard
    deck.removeFlashcard(1);
    expect(deck.flashcards.length).toBe(0);

    // Test addFlashcard again
    deck.addFlashcard(flashcard);
    
    // Test shuffleDeck
    deck.shuffleDeck(); // We can't directly check the order, just ensuring it doesn't crash
    expect(deck.flashcards.length).toBe(1);

    // Test saveToLibrary
    console.log = jest.fn(); // Mock console.log
    deck.saveToLibrary();
    expect(console.log).toHaveBeenCalledWith("Deck 'Math Deck' saved to library.");
});
