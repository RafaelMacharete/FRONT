class Coder {

    secondLang!: string;

    constructor(
        public readonly name: string, // Once the name is assigned, it can not be changed
        readonly music: string,
        private age: number, // It can only be acessed in the class
        protected lang: string = 'Roses' // Protected can be accesed from derived classes
        // but, private don't!, age can only be accessed on the Foo class
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    };

    // Even though age is private, we can access the value 
    public getAge() {
        return `Hello, I'm ${this.age}`;
    };

};

const Rafael = new Coder('Rafael', 'Hymn', 17)
console.log(Rafael.getAge());
// console.log(Rafael.age);
// console.log(Rafael.lang);


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age);
        this.computer = computer;
    };

    public getLang() {
        return `I write ${this.lang}`;
    };
}

const Macharete = new WebDev('Windows', 'Macharete', 'Hymn', 17)
console.log(Macharete.getLang());
// console.log(Macharete.age);
// console.log(Macharete.lang);
//////////////////////////////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string // method
}

class Euphonist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}