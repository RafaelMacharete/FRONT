/*type User = {
    id: number,
    name: string,
    isActive: boolean
};

const john: User = {
    id: 1,
    name: 'John',
    isActive: true
};

const matthew: User = {
    id: 2,
    name: 'Matthew',
    isActive: false
};

function createUser(user: User): User {
    console.log(`What's up , ${user.name.toUpperCase()} !`);

    return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber
value = 'Hello';
value = 213;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = "dark";
theme = "light";
// theme = "gray";

function setTheme(t: Theme): void {
    theme = t;
}

setTheme('dark')
*/

type Employee = {
    id: number,
    name: string,
    department: string
};

type Manager = {
    id: number,
    name: string,
    employees: Employee[],
};

type Staff = Manager | Employee;

const alice: Employee = {
    id: 1,
    name: 'Alice',
    department: 'Sales'
};

const steve: Employee = {
    id: 2,
    name: 'Steve',
    department: 'HR'
};

const bob: Manager = {
    id: 1,
    name: 'Bob',
    employees: [alice, steve]
};

function printStaffDetails(staff: Staff): void {
    if ('employees' in staff) {
        console.log(
            `${staff.name} is an manager in the ${staff.employees.length} employees`
        );
    } else {
        console.log(
            `${staff.name} is an employee in the ${staff.department} department`
        );
    }
}

printStaffDetails(alice)
printStaffDetails(bob)