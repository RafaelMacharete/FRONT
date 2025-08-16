let coinValue = parseFloat(prompt('Enter a coin value: '));
let conversionRate = parseFloat(prompt('Enter the conversion rate (e.g., 1 coin = ? reais): '));
let convertedValue = coinValue * conversionRate;

alert(`The converted value is ${convertedValue.toFixed(2)} `);

let result16 = document.getElementById("result");
result16.innerHTML = `
    <h3>Exercise 16 - Money Converter</h3>
    <pre>
        let coinValue = parseFloat(prompt('Enter a coin value: '));
        let conversionRate = parseFloat(prompt('Enter the conversion rate (e.g., 1 coin = ? reais): '));
        let convertedValue = coinValue * conversionRate;

        alert(\`The converted value is \${convertedValue.toFixed(2)}\`);
    </pre>`;