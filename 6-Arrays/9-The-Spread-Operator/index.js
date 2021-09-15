const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined =[...first, ...second];

// const copy = combined.splice();
const copyOfOriginal = [...combined];

console.log(`first array: ${first}`);
console.log(`second array: ${second}`);
console.log(`first and second arrays: ${first} - ${second}`);
console.log(`copy of the original array: ${copyOfOriginal}`)

console.log(copyOfOriginal);