let userAge = parseInt(prompt('Enter your age: '));

if (userAge < 18) {
    alert('You are a minor.');
} else {
    alert('You are an adult.');
}

let result8 = document.getElementById("result");
result8.innerHTML = `
    <h3>Exercise 8 - Age verification</h3>
    <pre>   
        let userAge = parseInt(prompt('Enter your age: '));

        if (userAge < 18) {
            alert('You are a minor.');
        } else {
            alert('You are an adult.');
        }
    </pre>`;
