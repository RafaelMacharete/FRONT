class Foo {
    constructor(name) {
        this.name = name;
        this.numOfRequestsForAge = 0;
        this._age = null; // Intern prop
    }

    get age() {
        this.numOfRequestsForAge++;
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    thisIsAFunction(){}
    
}

class Bar extends Foo{
    constructor (name, yearsOfExperience){
        super(name);

        // Custom behavior
        this.yearsOfExperience = yearsOfExperience;
    }
}

let foo = new Foo('Rafael')
foo.age = 17;

console.log(foo.age);
console.log(foo.age);
console.log(foo.age);
console.log(foo.age);
console.log(foo.numOfRequestsForAge);

let bar = new Bar('Macharete', 1);
bar._age