let firstNumber = parseFloat(prompt('Enter the first number: '));
let secondNumber = parseFloat(prompt('Enter the second number: '));

let difference = firstNumber - secondNumber;

alert('The difference between the numbers is: ' + difference);

let result4 = document.getElementById("result");
result4.innerHTML = `
    <h3>Exercise 4 - Difference between two numbers</h3>
    <pre>   
        firstNumber = parseFloat(prompt('Enter the first number: '));
        secondNumber = parseFloat(prompt('Enter the second number: '));

        difference = firstNumber - secondNumber;

        alert('The difference between the numbers is: ' + difference);
    </pre>`;