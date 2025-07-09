"use strict";
// convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful: TS seed no problem - but a string is returned 
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string;
10;
// DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
