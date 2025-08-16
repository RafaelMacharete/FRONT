let n = 5;
let factorial = 1;

for (let idx = 1; idx <= n; idx++) {
    factorial *= idx; 
}
alert(`${n}'s factorial is ${factorial}`);

let result20 = document.getElementById("result");
result20.innerHTML = `
    <h3>Exercise 20 - Number Factorial</h3>
    <pre>
        let n = 5;
        let factorial = 1;

        for (let idx = 1; idx <= n; idx++) {
            factorial *= idx;
        }
        alert(\`${n}'s factorial is ${factorial}\`);

    </pre>`;