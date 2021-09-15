const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const slice = combined.slice(2, 4);
const slice0 = combined.slice(2);
const slice1 = combined.slice();

console.log(`first array: ${first}`);
console.log(`second array: ${second}`)
console.log(`first and second arrays combined: ${combined}`);
console.log(`${slice}\n${slice0}\n${slice1}`);