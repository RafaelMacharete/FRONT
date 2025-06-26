console.log('typescript tutorial');

let awesomeName:string = 'Rafael Macharete';
console.log(awesomeName);

// --- //

let tax: number | string = 10;
tax = 100;
tax = '$100';

let requestStatus: 'pending' | 'success' | 'error' = 'error';
requestStatus = 'success';

// --- //

let notSure: any = 4;
notSure = 'hello!';
notSure = true;

// --- //

let books: string[] = ['book1', 'book2', 'book3']
let foundBook : string | undefined ;

for (const book of books) {
    if (book === 'book1'){
        foundBook = book;
        break;
    }
}

console.log(foundBook?.length);
