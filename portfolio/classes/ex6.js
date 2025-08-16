let celsiusTemperature = parseFloat(prompt('Enter the Celsius temperature: '));
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

alert(`The temperature in Fahrenheit is: ${fahrenheitTemperature}`);

let result6 = document.getElementById("result");
result6.innerHTML = `
    <h3>Exercise 6 - Celsius to Fahrenheit</h3>
    <pre>   
        celsiusTemperature = parseFloat(prompt('Enter the Celsius temperature: '));
        fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

        alert('The temperature in Fahrenheit is: ' + fahrenheitTemperature);
    </pre>`;