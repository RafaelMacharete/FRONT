let firstTestGrade = parseFloat(prompt('Enter the 1st test grade: '));
let secondTestGrade = parseFloat(prompt('Enter the 2nd test grade: '));
let thirdTestGrade = parseFloat(prompt('Enter the 3rd test grade: '));

let averageGrade = (firstTestGrade + secondTestGrade + thirdTestGrade) / 3;

alert(`The average grade is: ` + averageGrade);

let result2 = document.getElementById("result");
result2.innerHTML = `
    <h3>Exercise 2 - Average Grade Calculation</h3>
    <pre>   
        let firstTestGrade = parseFloat(prompt('Enter the 1st test grade: '));
        let secondTestGrade = parseFloat(prompt('Enter the 2nd test grade: '));
        let thirdTestGrade = parseFloat(prompt('Enter the 3rd test grade: '));

        let averageGrade = (firstTestGrade + secondTestGrade + thirdTestGrade) / 3;

        alert('The average grade is: ' + averageGrade);
    </pre>`;
    