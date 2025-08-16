let height = parseFloat(prompt('Enter the height: '));
let width = parseFloat(prompt('Enter the width: '));

let area = height * width;

alert(`The area is: ${area}`);

let result7 = document.getElementById("result");
result7.innerHTML = `
    <h3>Exercise 7 - Area calculator</h3>
    <pre>   
        let height = parseFloat(prompt('Enter the height: '));
        let width = parseFloat(prompt('Enter the width: '));

        let area = height * width;

        alert('The area is: ' + area);
    </pre>`;