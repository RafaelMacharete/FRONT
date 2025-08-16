let firstNumber = parseFloat(prompt('Enter the first number: '));
let secondNumber = parseFloat(prompt('Enter the second number: '));

if (firstNumber % secondNumber === 0) {
    alert(firstNumber + ' is a multiple of ' + secondNumber);
} else {
    alert(firstNumber + ' is not a multiple of ' + secondNumber);
}

let result5 = document.getElementById("result");
result5.innerHTML = `
    <h3>Exercise 5 - Is a multiple of</h3>
    <pre>   
        firstNumber = parseFloat(prompt('Enter the first number: '));
        secondNumber = parseFloat(prompt('Enter the second number: '));

        if (firstNumber % secondNumber === 0) {
            alert(firstNumber + ' is a multiple of ' + secondNumber);
        } else {
            alert(firstNumber + ' is not a multiple of ' + secondNumber);
        }
    </pre>`;