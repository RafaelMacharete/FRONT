function getEmployee(): Person | DogOwner | Manager {
    const randomValue = Math.random()

    if (randomValue < 0.33) {
        return {
            name: 'john',
        };
    }
    else if (randomValue < 0.66) {
        return {
            name: 'sarah',
            dogName: 'rex',
        };
    }
    return {
        name: 'bob',
        managePeople() {
            console.log('Managing people...');
        },
        delegateTasks() {
            console.log('Delegating tasks...');

        },
    }
}

interface Person {
    name: string;
}

interface DogOwner extends Person {
    dogName: string;
}

interface Manager extends Person {
    managePeople(): void;
    delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee()

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
    return 'managePeople' in obj;
}

if (isManager(employee)){
    employee.delegateTasks();
}

let person: string & number