const animal = {
    'id': 42,
    'name': 'bob',
    'type': 'dog',
    'num legs': 4,
    numLegs: 2
};

// console.log(animal);

// delete animal['num legs'];
// console.log(animal);

// delete animal.numLegs;
// console.log(animal);

// ########## object-in ##########

console.log(animal);
console.log('name' in animal);

// ## end ##

// console.log(animal.keys());
console.log(Object.keys(animal));
console.log(Object.values(animal));
console.log(Object.entries(animal));

