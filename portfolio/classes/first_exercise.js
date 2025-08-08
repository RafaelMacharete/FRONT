let firstNumber = parseFloat(prompt('Enter the 1st number: '));
let secondNumber = parseFloat(prompt('Enter the 2nd number: '));

let sum = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

alert(`The results are: 
    sum: ${sum}\n
    subtraction: ${subtraction}\n
    multiplication: ${multiplication}\n
    division: ${division}`);

let resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h3>Exercise 1 - Arithmetic operations</h3>
    <pre>   
        let firstNumber = parseFloat(prompt('Enter the 1st number: '));
        let secondNumber = parseFloat(prompt('Enter the 2nd number: '));

        let sum = firstNumber + secondNumber;
        let subtraction = firstNumber - secondNumber;
        let multiplication = firstNumber * secondNumber;
        let division = firstNumber / secondNumber;
    </pre>`;
    