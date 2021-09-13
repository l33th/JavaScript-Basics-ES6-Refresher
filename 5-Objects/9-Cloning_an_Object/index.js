const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({}, circle);
const another = {...circle}; // Simplest way to clone an object
console.log(another);

// const another = {};

// for (let key in circle) {
//     another[key] = circle[key];
// }

// // another['radius'] = circle['readius'];
// console.log(another);