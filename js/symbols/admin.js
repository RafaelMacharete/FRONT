const character1 = {
    name: 'name1',
    class: 'class1',
    quote: 'quote1',
    __admin__: false,
    toString: () => 'toString', 
};

for (const key of Object.keys(character1)){
    console.log(key);
}