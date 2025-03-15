class Flashcard {
    constructor(id, question, answer, contentType = 'text', tags = []) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.contentType = contentType;
        this.tags = tags || [];
    }

    editQuestion(newQuestion) {
        this.question = newQuestion; // Fixed typo
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

module.exports = Flashcard;
