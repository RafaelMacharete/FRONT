"use strict";
class Coder {
    constructor(name, // Once the name is assigned, it can not be changed
    music, age, // It can only be acessed in the class
    lang = 'Roses' // Protected can be accesed from derived classes
    // but, private don't!, age can only be accessed on the Foo class
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    ;
    // Even though age is private, we can access the value 
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
    ;
}
;
const Rafael = new Coder('Rafael', 'Hymn', 17);
console.log(Rafael.getAge());
// console.log(Rafael.age);
// console.log(Rafael.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    ;
    getLang() {
        return `I write ${this.lang}`;
    }
    ;
}
const Macharete = new WebDev('Windows', 'Macharete', 'Hymn', 17);
console.log(Macharete.getLang());
class Euphonist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
