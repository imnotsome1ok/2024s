let num = Math.floor(Math.random() * 100);
let guess;

function guessCheck() {
    guess = parseInt(document.getElementById("guessBox").value);

    if (isNaN(guess)) {
        document.getElementById("eval").textContent = "Please type a number in";
    } else {
        // Set the value of guessBox to the user's guess
        document.getElementById("guessBox").value = guess;
    }
    
    if(guess > num) {
        document.getElementById("eval").textContent = "The number is lower";
    } else if (guess < num) {
        document.getElementById("eval").textContent = "The number is higher";
    } else if (guess === num) {
        document.getElementById("eval").textContent = "Good job you won! Reset the page to try again cause I ain't doing all that";
    } else {
        document.getElementById("eval").textContent = "Please type a number in";
    }
}
