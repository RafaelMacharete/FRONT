const numbers = [2, 4, 6, 8];
const multipliedByIndex = numbers.map((num, index) => num * index);
alert(multipliedByIndex);

let functionResult10 = document.getElementById("result");
functionResult10.innerHTML = `
    <h3>Function exercise 10 - Multiply number by idx</h3>
    <pre>
       const numbers = [2, 4, 6, 8];
       const multipliedByIndex = numbers.map((num, index) => num * index);
       alert(multipliedByIndex);
    </pre>`;