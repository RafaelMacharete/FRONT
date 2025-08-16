let userNumber = parseInt(prompt("Enter a number between 1 and 9:"));

for (let idx = 1; idx <= 10; idx++) {
    let result = userNumber * idx;
    alert(`The result of ${userNumber} * ${idx} is ${result}.`);
}

let result18 = document.getElementById("result");
result18.innerHTML = `
    <h3>Exercise 18 - Multiplication Table</h3>
    <pre>
        let userNumber = parseInt(prompt("Enter a number between 1 and 9:"));
        for (let idx = 1; idx <= 10; idx++) {
            let result = userNumber * idx;
            alert(\`The result of \${userNumber} * \${idx} is \${result}.\`);
        }
    </pre>`;