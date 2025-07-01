type Book1 = {
    id: number;
    name: string;
    price: number
};
type DiscountedBook = Book1 & { discount: number }

const book1: Book1 = {
    id: 1,
    name: 'How to cook a dragon',
    price: 14,
};

const book2: Book1 = {
    id: 2,
    name: 'How to win friend and Influence people',
    price: 10,
};

// const book3: Book1 & { discount: number } = {
//     id: 3,
//     name: 'O corpo fala',
//     price: 12,
//     discount: 1
// };

const discountedBook: DiscountedBook = {
    id: 3,
    name: 'O corpo fala',
    price: 12,
    discount: 1
};

// ***************************** \\
//          Second Part          \\
// ***************************** \\
const propName = 'age';

type Animal = {
    [propName]: number;

}

let tiger: Animal = {
    [propName]: 4
};


// ***************************** \\
//         Interface Type        \\
// ***************************** \\
// -- Allow to setup shape of objects (only objects)

interface Book2 {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string

    // method
    printAuthor(): void
    printTitle(message: string): string;
    printSomething: (someValue: number) => number
}

const deepWork: Book2 = {
    isbn: 123,
    title: 'deep work',
    author: 'cal newport',
    genre: 'self-help',
    printAuthor() {
        console.log(this.author);
    },
    printTitle(message) {
        return `${this.title} ${message}`
    },
    // first option
    printSomething: function (someValue) {
        return someValue
    }
    // second option
    // third option
}

// deepWork.isbn = 'aa';

// deepWork.printAuthor();
// const result = deepWork.printTitle('is awesome book');
// console.log(result);


console.log(deepWork.printSomething(34));