let year = parseInt(prompt('Enter a year: '));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(`${year} is a leap year.`);
} else {
    alert(`${year} is not a leap year.`);
}

let result15 = document.getElementById("result");
result15.innerHTML = `
    <h3>Exercise 15 - Leap Year</h3>
    <pre>
        let year = parseInt(prompt('Enter a year: '));

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            alert(\`\${year} is a leap year.\`);
        } else {
            alert(\`\${year} is not a leap year.\`);
        }
    </pre>`;
