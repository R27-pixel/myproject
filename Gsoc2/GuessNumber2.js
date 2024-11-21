let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;

const attemptData = document.getElementById("attempt");
const cardGrid = document.getElementById("cardGrid");
const message = document.getElementById("msg");
const resBtm = document.getElementById("resBtm");

// Function to create cards dynamically
function createCards() {
    cardGrid.innerHTML = ""; // Clear grid
    for (let i = 1; i <= 100; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = i;
        card.dataset.value = i; // Store the card's value
        card.addEventListener("click", handleGuess);
        cardGrid.appendChild(card);
    }
}

// Function to handle a card click (guess)
function handleGuess(event) {
    const guessedNum = parseInt(event.target.dataset.value);
    const card = event.target;

    attempt++;
    attemptData.innerHTML = attempt;

    if (guessedNum === cnum) {
        message.innerHTML = "🎉 Congratulations! You guessed the number!";
        message.style.color = "green";
        card.classList.add("correct");
        endGame();
    } else if (guessedNum > cnum) {
        message.innerHTML = "📈 Too High! Try again.";
        message.style.color = "red";
        card.classList.add("incorrect");
    } else {
        message.innerHTML = "📉 Too Low! Try again.";
        message.style.color = "red";
        card.classList.add("incorrect");
    }
}

// Function to reset the game
function restartGame() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    message.innerHTML = "";
    resBtm.style.display = "none";
    createCards();
}

// Function to end the game
function endGame() {
    resBtm.style.display = "block";
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.removeEventListener("click", handleGuess));
}

// Initialize the game
createCards();
resBtm.addEventListener("click", restartGame);
