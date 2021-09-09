let person = {
    name: 'l33th',
    age: 164
};

let person2 = {
    name: 'ht33l',
    age: 461
};

// Dot notation
person.name = 'Developer';

// Bracket notation
let selection = 'name';
person[selection] = 'Designer';

console.log(person.name);
console.log(person2.name);
