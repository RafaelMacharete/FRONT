let celsiusTemperature = parseFloat(prompt('Enter the temperature in Celsius: '));

if (celsiusTemperature < 18) {
    alert('Freezing!');
} else if (celsiusTemperature <= 25) {
    alert('Enjoyable!');
} else {
    alert('Hot!');
}

let result12 = document.getElementById("result");
result12.innerHTML = `
    <h3>Exercise 12 - Check temperature</h3>
    <pre>   
        let celsiusTemperature = parseFloat(prompt('Enter the temperature in Celsius: '));

        if (celsiusTemperature < 18) {
            alert('Freezing!');
        } else if (celsiusTemperature <= 25) {
            alert('Enjoyable!');
        } else {
            alert('Hot!');
        }
    </pre>`;