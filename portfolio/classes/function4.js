const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
alert(doubled);

let functionResult4 = document.getElementById("result");
functionResult4.innerHTML = `
    <h3>Function exercise 4 - Double numbers in a collection</h3>
    <pre>
       const numbers = [1, 2, 3, 4, 5];
       const doubled = numbers.map(num => num * 2);
       alert(doubled);

    </pre>`;