let firstNumber = parseFloat(prompt('Enter the first number: '));
let secondNumber = parseFloat(prompt('Enter the second number: '));

if (firstNumber >= secondNumber) {
    alert('The first number is greater than or equal to the second number.');
} else {
    alert('The first number is less than the second number.');
}

let result10 = document.getElementById("result");
result10.innerHTML = `
    <h3>Exercise 10 - Greater or equal</h3>
    <pre>   
        let firstNumber = parseFloat(prompt('Enter the first number: '));
        let secondNumber = parseFloat(prompt('Enter the second number: '));

        if (firstNumber >= secondNumber) {
            alert('The first number is greater than or equal to the second number.');
        } else {
            alert('The first number is less than the second number.');
        }
    </pre>`;
