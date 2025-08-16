const userChoice = "pedra";

const computerChoices = ["pedra", "papel", "tesoura"];

const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

alert("Your choice:" + userChoice);
alert("Computer chose:" + computerChoice);

if (userChoice === computerChoice) {
    alert("It's a tie!");
} else if ( (userChoice === "pedra" && computerChoice === "tesoura")
) {
    alert("You won");
} else {
    alert("You lost");
}

let result19 = document.getElementById("result");
result19.innerHTML = `
    <h3>Exercise 19 - Rock, Paper, Scissors</h3>
    <pre>
        const userChoice = "pedra";

        const computerChoices = ["pedra", "papel", "tesoura"];

        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        alert("Your choice:", userChoice);
        alert("Computer chose:", computerChoice);

        if (userChoice === computerChoice) {
        alert("It's a tie!");
        } else if (
        (userChoice === "pedra" && computerChoice === "tesoura")
        ) {
        alert("You won");
        } else {
        alert("You lost");
        }

    </pre>`;