// pattern
class MyClass {
    // class methods
    constructor() { };
    method1() { };
    method2() { };
    method3() { };
};

// example
class User {
    constructor(name) {
        this.name = name;
    }

    signIn() {
        return `User: ${this.name} is now logged`
    }
}

// Usage:
let user = new User('Rafael Macharete');
console.log(user.signIn());
/*
Whe new User is called, a new object is created.
The constructor runs with the given argument (parameter) and assigns it to this.name.

In JS, a class is a kind of function.
*/

class Foo {
    constructor(field) {
        this.field = field;
    }

    doesSmtg() {
        console.log(`I do what u want to, ${this.field}`);
    }
}


// Class is a function
console.log(typeof Foo); // function

// or, more precisely, the constructor method
console.log(Foo === Foo.prototype.constructor); // true

// The method are in Foo.prototype, e.g:
console.log(Foo.prototype.doesSmtg);
console.log(Object.getOwnPropertyNames(Foo.prototype));


/*
But why `function`? 
    what class Foo {...} construct realy does is:
    1. Creates a function named Foo, that becomes the result of the class declaration. The function code is takne from the -constructor- method (assumed empty if we don't write such method).

    2. Stores class methods, such as -doesSmtg-, in -Foo.prototype-.
*/

// Now, rewriting class Foo in pure functions

function Foo2(field){
    this.field = field;
}
// a function prototype has -constructor- property by default, so we don't need to create it

// Add the method to prototype
Foo2.prototype.doesSmtg = function() {
    console.log(`I do what u want to, ${this.field}`);
}

let foo2 = new Foo2('Foo2');
foo2.doesSmtg();

console.log('\n\n--- Important differences ---');

// We have important differences.
/*
    1. A function created by class is labelled by a special internal property [[IsClassConstructor]] : true. So it's not entirely the same as creating it manually.

    The languagechecks for thar property in a varierity of places. For example, unlike a regular function, it must be called with new:

    2. Class methods are non-enumerable. A class definition sets -enumerable- flag to -false- for all method in the --prototype--.
        Reason: If we for..in over an object, we usually don't want its class methods.

    3. Classes always -use stric-. All code inside the class construct is automatically in stric mode.
*/
Foo2();
// Foo(); Error: Class constructor Foo cannot be invoked without 'new'.


for (const field in foo2) {
    if (Object.prototype.hasOwnProperty.call(foo2, field)) {
        const element = foo2[field];
        console.log(element);
    }
}
console.log(foo2);

console.log(Foo); // [class Foo]


