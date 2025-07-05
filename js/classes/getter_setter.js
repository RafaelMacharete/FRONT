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
}

let foo = new Foo('Rafael Macharete')
foo.age = 17;

console.log(foo.age);
console.log(foo.age);
console.log(foo.age);
console.log(foo.age);
console.log(foo.numOfRequestsForAge);
