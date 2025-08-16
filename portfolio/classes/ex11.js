const password = 'A professora Fernanda é incrível S2!';

let userInput = prompt('Enter the password: ');

if (userInput === password) {
    alert('Allowed access');
} else {
    alert('Forbidden access');
}

let result11 = document.getElementById("result");
result11.innerHTML = `
    <h3>Exercise 11 - Verify password</h3>
    <pre>   
        const password = 'A professora Fernanda é incrível S2!';

        let userInput = prompt('Enter the password: ');

        if (userInput === password) {
            alert('Allowed access');
        } else {
            alert('Forbidden access');
        }
    </pre>`;