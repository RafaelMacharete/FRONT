let username = 'John'
console.log(username)

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

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
};

console.log(Grade.U);

// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
};

type userId = stringOrNumber

// Literal types
let myName2: 'Rafael';

let userName: 'Rafael' | 'Lucas' | 'Ageu';
userName = 'Lucas';

// functions
const add = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

logMsg('Hello');
logMsg(add(1, 2));
logMsg(add('a', 2));

let subtract = function (c: number, d: number): number {
    return c - d;
};

// type mathFunction = (a: number, b: number) => number
interface mathFunction {
    (a: number, b: number): number;
};

let multiply: mathFunction = function (c, d) {
    return c * d
}


// optional parameters
const addAll = (a: number, b: number, c?: number) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};

// default param value
const sumAll = (a: number, b: number, c: number = 2) => {
    return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3))

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
};

console.log('Log');

logMsg(total(1, 2));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break;
    };
};

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false;
};

// Use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') return 'number';
    return createError('This should never happen!');
}