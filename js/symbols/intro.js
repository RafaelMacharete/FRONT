const mySymbol = Symbol();
const namedSymbol = Symbol("Monkey")

console.log(mySymbol);
console.log(namedSymbol);

console.log(typeof namedSymbol);
console.log(typeof namedSymbol);
console.log(typeof "hello\n");


console.log(Symbol() === mySymbol); // false
console.log(Symbol("Monkey") === namedSymbol); // false

console.log("\n==============\n");
console.log(mySymbol.description);
console.log(namedSymbol.description);
