let person = {
    name: 'Wilgerth',
    age: 24
};

let person2 = {
    name: 'Laila',
    age: 17
};

// Dot notation
person.name = 'Mouton';

// Bracket notation
let selection = 'name';
person[selection] = 'Laila';

console.log(person.name);
console.log(person2.name);