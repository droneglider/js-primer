


function howOld(born) {
    return (new Date).getFullYear() - born;
}

var children = [ // array
    {
        name: 'Julia',
        yob: 2007,
        age: -1
    },
    {
        name: 'Leon',
        yob: 2009,
        age: -1
    },
    {
        name: 'Rita',
        yob: 2011,
        age: -1
    }
];

for (var current in children) {
    children[current].age = howOld(children[current].yob);
}

console.log(children);

var name = 'Julia', // string aka text
    yob = 2007,     // integer number
    yearsOld = (new Date).getFullYear() - yob;

console.log('');
console.log('Hello ' + name + ' you are ' + yearsOld + ' years old.');
console.log('');

