const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
alert((sum(5, 3)));

let functionResult1 = document.getElementById("result");
functionResult1.innerHTML = `
    <h3>Function exercise 1 - Sum 2 numbers</h3>
    <pre>
       const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
       alert((sum(5, 3)));

    </pre>`;