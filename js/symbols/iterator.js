const character3 = {
    name: 'name1',
    class: 'class1',
    quote: 'quote1',
    __admin__: false,
    toString: () => 'toString',
    [Symbol.iterator]: function* (){
        yield 1;
        yield 2;
        yield 'hello';
    }
};

for (const value of character3){
    console.log(value);
    
}