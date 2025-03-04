const Flashcard = require('./Flashcard');

const flashcard = new Flashcard('1', 'what is the DRABT?', 'A flashcard website and mobile app.','text', ['Website', 'DRABT']);
console.log(flashcard);

flashcard.editQuestion('What is MindMaze?');
flashcard.addTag('Games');
flashcard.removeTag('DRABT');

console.log(flashcard);

