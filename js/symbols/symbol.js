const character2 = {
    name: 'character2',
    class: 'class2',
    quote: 'quote2',
    [Symbol('name')]: false,
    [Symbol('age')]: 1,
    [4 + 5]: 'age',
};

for (const key of Object.keys(character2)){
    console.log(key);
}

console.log(Object.getOwnPropertySymbols(character2))
console.log(Object.getOwnPropertyDescriptor(character2, 'age'));
