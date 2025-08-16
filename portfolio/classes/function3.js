const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

let firstNumber = 10;
let secondNumber = 5;

alert("Sum: " + add(firstNumber, secondNumber));
alert("Subtract: " + subtract(firstNumber, secondNumber));


let functionResult3 = document.getElementById("result");
functionResult3.innerHTML = `
    <h3>Function exercise 3 - Basic arithmetic operations</h3>
    <pre>
       const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
       const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

       let firstNumber = 10;
       let secondNumber = 5;

       alert("Sum: " + add(firstNumber, secondNumber));
       alert("Subtract: " + subtract(firstNumber, secondNumber));

    </pre>`;