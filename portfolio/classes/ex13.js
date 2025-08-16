let firstGrade = parseFloat(prompt('Enter the first grade: '));
let secondGrade = parseFloat(prompt('Enter the second grade: '));

let average = (firstGrade + secondGrade) / 2;

if (average > 7 && firstGrade % 2 === 0 || secondGrade % 2 === 0) {
    alert('Above average, and at least one grade is even');
} else {
    alert('Below average');
}

let result13 = document.getElementById("result");
result13.innerHTML = `
    <h3>Exercise 13 - Is above average</h3>
    <pre>
        let firstGrade = parseFloat(prompt('Enter the first grade: '));
        let secondGrade = parseFloat(prompt('Enter the second grade: '));

        let average = (firstGrade + secondGrade) / 2;

        if (average > 7 && firstGrade % 2 === 0 || secondGrade % 2 === 0) {
            alert('Above average, and at least one grade is even');
        } else {
            alert('Below average');
        }
    </pre>`;