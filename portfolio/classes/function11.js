const values = [1, 2, 3, 4, 5, 6, 7];
const oddCount = values.filter(num => num % 2 !== 0).length;
alert(oddCount);

let functionResult11 = document.getElementById("result");
functionResult11.innerHTML = `
    <h3>Function exercise 11 - How many odd numbers</h3>
    <pre>
       const values = [1, 2, 3, 4, 5, 6, 7];
       const oddCount = values.filter(num => num % 2 !== 0).length;
       alert(oddCount);
    </pre>`;