let wallHeight = parseFloat(prompt('Enter the wall height: '));
let wallWidth = parseFloat(prompt('Enter the wall width: '));

let wallArea = wallHeight * wallWidth;
let litersOfPaint = wallArea / 2;

alert(`The amount of paint needed is: ` + litersOfPaint + ` liters.`);

let result3 = document.getElementById("result");
result3.innerHTML = `
    <h3>Exercise 3 - Arithmetic operations</h3>
    <pre>   
        let wallHeight = parseFloat(prompt('Enter the wall height: '));
        let wallWidth = parseFloat(prompt('Enter the wall width: '));

        let wallArea = wallHeight * wallWidth;
        let litersOfPaint = wallArea / 2;

        alert('The amount of paint needed is: ' + litersOfPaint + ' liters.');
    </pre>`;

    