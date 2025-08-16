let number = parseInt(prompt('Enter a number: '));

if (number % 2 === 0) {
    alert('The number is even.');
} else {
    alert('The number is odd.');
}

let result9 = document.getElementById("result");
result9.innerHTML = `
    <h3>Exercise 9 - Even or odd</h3>
    <pre>   
        let number = parseInt(prompt('Enter a number: '));

        if (number % 2 === 0) {
            alert('The number is even.');
        } else {
            alert('The number is odd.');
        }
    </pre>`;