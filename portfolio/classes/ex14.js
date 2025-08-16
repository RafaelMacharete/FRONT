let personHeight = parseFloat(prompt('Enter your height in meters (e.g., 1.77): '));
let personWeight = parseFloat(prompt('Enter your weight in kilograms: '));

let imc = personWeight / (personHeight * personHeight);

alert(`Your IMC is ${imc.toFixed(2)}`);

let result14 = document.getElementById("result");
result14.innerHTML = `
    <h3>Exercise 14 - IMC Calculator</h3>
    <pre>
        let personHeight = parseFloat(prompt('Enter your height in meters: '));
        let personWeight = parseFloat(prompt('Enter your weight in kilograms: '));

        let imc = personWeight / (personHeight * personHeight);

        alert(\`Your IMC is \${imc.toFixed(2)}\`);
    </pre>`;