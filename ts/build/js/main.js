"use strict";
let username = 'John';
console.log(username);
let myName = 'Rafael';
let stringArr = ['one', 'key', 'Rafael'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
// guitars.unshift(true)
guitars.unshift('Macharete');
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
;
console.log(Grade.U);
// Literal types
let myName2;
let userName;
userName = 'Lucas';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(1, 2));
logMsg(add('a', 2));
let subtract = function (c, d) {
    return c - d;
};
;
let multiply = function (c, d) {
    return c * d;
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// Rest parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log('Log');
logMsg(total(1, 2));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
    ;
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen!');
};
