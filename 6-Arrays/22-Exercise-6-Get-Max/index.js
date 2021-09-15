const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  array.reduce((accum, curr) => (accum > curr) ? accum : curr);
}
