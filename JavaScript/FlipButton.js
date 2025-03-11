document.getElementById("flip-button").addEventListener("click", () => {
    const flashcard = document.querySelector(".flashcard");
    if (flashcard.innerHTML === "<div class='front'>Question</div>") {
        flashcard.innerHTML = "<div class='back'>Answer</div>";
    } else {
        flashcard.innerHTML = "<div class='front'>Question</div>";
    }
});
