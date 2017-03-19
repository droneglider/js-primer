



function summerCourseForGirls3to5yo(children) {
    var filtered = [];
    for (var no in children) {
        if (children[no].age > 2 && children[no].age < 6) {
            filtered.push(children[no]);
        }
    }
    return filtered;
}

function summerCourseForBoys5to11(children) {
    var filtered = [];
    for (var no in children) {
        if (children[no].gender === 'm' &&
            (children[no].age > 4 && children[no].age < 12)) {
            filtered.push(children[no]);
        }
    }
    return filtered;
}

function howOld(born, month) {
    var tempAge = (new Date).getFullYear() - born;
    if (1 * (new Date).getMonth() < month) {
        tempAge = tempAge - 1;
    }
    return tempAge;
}

var children = [ // array
    {
        _yob: 2007,
        _mob: 1,
        name: 'Julia',
        gender: 'f',
        age: -1
    },
    {
        _yob: 2009,
        _mob: 8,
        name: 'Leon',
        gender: 'm',
        age: -1
    },
    {
        _yob: 2011,
        _mob: 11,
        name: 'Rita',
        gender: 'f',
        age: -1
    }
];

for (var current in children) {
    children[current].age = howOld(
        children[current]._yob,
        children[current]._mob
    );
}

console.log(children);

var name = 'Julia', // string aka text
    yob = 2007,     // integer number
    yearsOld = (new Date).getFullYear() - yob;

console.log('');
console.log('Hello ' + name + ' you are ' + yearsOld + ' years old.');
console.log('');
console.log('Summer camp for 3-5 girls');
console.log(summerCourseForGirls3to5yo(children));
console.log('Summer camp for 5-11 boys');
console.log(summerCourseForBoys5to11(children));
