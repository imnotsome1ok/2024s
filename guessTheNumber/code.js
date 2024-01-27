let num = Math.floor(Math.random() * 100);
let guess;
let count = 0;
let guesses = [];
let won = false;

//function changes most of the screen when lock in is pressed
function updateScreen() {
    //determines what the users guess is
    guess = parseInt(document.getElementById("guessBox").value);

    //determines whether the user actually put a number in
    if (guess === NaN) {
        document.getElementById("eval").textContent = "Please type a valid number in";
    } else {
        // Set the value of guessBox to the user's guess
        document.getElementById("guessBox").value = guess;
    }
    
    //checks the users guess in comparison to the number
    if (guess > num) {
        document.getElementById("eval").textContent = "The number is lower";
    } else if (guess < num) {
        document.getElementById("eval").textContent = "The number is higher";
    } else if (guess === num) {
        document.getElementById("eval").textContent = "Good job you won!";
        won = true;
    } else {
        document.getElementById("eval").textContent = "Please type a valid number in";
        document.getElementById("guessBox").value = "";
        return;
    }

    //adds a guess
    count = count + 1;

    //counts how many guesses the user made so far
    if(count === 1){
        document.getElementById("gCount").textContent = "1 guess so far.";
    } else {
        document.getElementById("gCount").textContent = `${count} guesses so far.`;
    }

    //stores adds guesses to the list and displays them
    guesses.push(guess)
    document.getElementById("guessesText").textContent = "Guesses: " + guesses;

    //resets what's in the guess box
    document.getElementById("guessBox").value = "";
}

//whole function resets the game.
function restart() {
    //determines if it is the best score and adds it if it is.
    let bestScore = 0;
    if (count > bestScore && won === true) {
        bestScore = count
        document.getElementById("bestText").textContent = "Best score is " + bestScore + " guesses.";
    }

    //resets everything
    num = Math.floor(Math.random() * 100);
    count = 0;
    document.getElementById("gCount").textContent = "0 guesses so far."
    document.getElementById("eval").textContent = "Begin with a guess below";
    document.getElementById("guessBox").value = "";
    document.getElementById("guessesText").textContent = "lol start guessing bro"
    guesses = [];
    won = false;
}
