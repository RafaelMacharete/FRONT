const isEven = num => num % 2 === 0;
alert((isEven(4)));
alert((isEven(7)));

let functionResult2 = document.getElementById("result");
functionResult2.innerHTML = `
    <h3>Function exercise 2 - Is Even</h3>
    <pre>
       const isEven = num => num % 2 === 0;
       alert((isEven(4)));
       alert((isEven(7)));

    </pre>`;