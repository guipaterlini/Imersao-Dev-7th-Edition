var secretNumber = parseInt(Math.random() * 1001);

while (guessedNumber != secretNumber) {
    var guessedNumber = prompt("Guess a number between 0 and 1000");
    
    if (guessedNumber == secretNumber) {
        alert("You got it, you got the right answer!");
    } else if (guessedNumber > secretNumber) {
        alert("Wrong number... try a lower one ;)");
    } else {
        alert("Wrong number... try a higher one ;)");
    }
    console.log(secretNumber)
}
