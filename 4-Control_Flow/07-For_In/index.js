const person = {
    name: 'Developer',
    age: 16
};

for (let key in person)
    console.log(key, person[key]);

console.log('-----------------------------')

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);
