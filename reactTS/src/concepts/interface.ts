interface Person {
    name: string;
    getDetails(): string;
};

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
};

interface Person {
    age: number
};

const person1: Person = {
    name: 'Leafar',
    age: 71,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
};

const dogOwner1: DogOwner = {
    dogName: 'Stella',
    getDogDetails() {
        return `Dog name: ${this.dogName}`;
    },
};

console.log(person1.getDetails());

interface Employee extends Person {
    employeeId: number;
};

const employee: Employee = {
    employeeId: 1,
    name: 'Rafael',
    age: 17,
    getDetails() {
        return `Name: ${this.name}, ID ${this.employeeId}`
    }
};

interface Manager extends Person, DogOwner {
    managePeople(): void;
    delegateTasks(): void;
    getEmployee(): Person | DogOwner | Manager;
};

const manager1: Manager = {
    name: 'Bob',
    age: 12,
    dogName: 'Rex',
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails() {
        return `Name: ${this.dogName}`;
    },
    managePeople() {
        console.log('Managing people...');
    },
    delegateTasks() {
        return `Delegating tasks to...`
    },
    getEmployee() {
        let randomNumber = Math.random()
        if (randomNumber < 0.33) {
            return person1;
        } else if (randomNumber < 0.66) {
            return dogOwner1;
        } else{
            return manager1;
        }
    },
};

manager1.managePeople();