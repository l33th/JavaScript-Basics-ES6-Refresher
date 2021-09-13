const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}

// an object is not iterable\
for (let key of Object.keys(circle)) {
    console.log(key);
}

for (let entry of Object.entries(circle)) {
    console.log(entry);
}

if ('radius' in circle) {
    console.log('yes');
}

let isIt = ('diameter' in circle ? 'Yes' : 'No')
    console.log(isIt);

// function Object() {}
// const x = { value: 1 };
// const x = new Oject();
// Object.keys()