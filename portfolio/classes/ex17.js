let userNumber = parseInt(prompt("Enter a integer number:"));
let computerGuess;
for (let idx = 0; idx < 3; idx++) {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    if (computerGuess === userNumber) {
        alert(`Computer guessed your number ${userNumber} correctly!`);
        break;
    }else{
        alert(`Computer guessed your number ${userNumber} incorrectly. Computer's guess was ${computerGuess}.`);
    }
}

let result17 = document.getElementById("result");
result17.innerHTML = `
    <h3>Exercise 17 - Guessing Game</h3>
    <pre>
        let userNumber = parseInt(prompt("Enter a integer number:"));
        let computerGuess;
        for (let idx = 0; idx < 3; idx++) {
            computerGuess = Math.floor(Math.random() * 100) + 1;
            if (computerGuess === userNumber) {
                alert(\`Computer guessed your number ${userNumber} correctly!\`);
                break;
            }else{
                alert(\`Computer guessed your number ${userNumber} incorrectly. Computer's guess was ${computerGuess}.\`);
            }
        }
    </pre>`;