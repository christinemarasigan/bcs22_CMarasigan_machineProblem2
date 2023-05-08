// Machine Problem 2: Guess the Number Game
// Marasigan, Christine T. 
// BCS22

let num1 = Math.random() * 100; 
let roundNum1 = Math.round(num1);

// function for guessing the number
function guessNumber() {
    for(x = 1; x == x; x++) { // loop to allow the user to guess the number
        userInput = prompt('Guess a number between 1 and 100: ') // prompt the user to enter a number to be guessed
        if (userInput > 100 || userInput < 1) { 
            alert('Invalid input. Please input between 1 and 100.') 
        } else if (userInput > roundNum1) {
            alert('Too high! Guess again.') // if the input is high
        } else if (userInput < roundNum1) {
            alert('Too low! Guess again.') // if the input is low
        } else {
            alert(`Congratulations! You guessed the number in ${x} tries!`); // if the user guessed the correct number within a certain number of tries
            break; // the loop ends if the user inputs the correct number
        }
    }
}

// call the function
guessNumber();