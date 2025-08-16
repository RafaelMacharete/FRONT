const values = [5, 12, 8, 20, 3, 15];
const greaterThan10 = values.filter(num => num > 10);
alert(greaterThan10);

let functionResult5 = document.getElementById("result");
functionResult5.innerHTML = `
    <h3>Function exercise  - Filter values greater than 10</h3>
    <pre>
       const values = [5, 12, 8, 20, 3, 15];
       const greaterThan10 = values.filter(num => num > 10);
       alert(greaterThan10);

    </pre>`;