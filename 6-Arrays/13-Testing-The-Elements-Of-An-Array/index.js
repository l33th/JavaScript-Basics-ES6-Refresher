const numbers = [1, 2, 3, -4];

// const allPositive = posNumbers.every(value => { return value >= 0; });

const atLeastOnePositive = numbers.some(value => value >= 0);

console.log(atLeastOnePositive);

// ALTERNATIVE WAYS TO DO THE ABOVE
// const allPositive = numbers.every(function(value) {
//   return value >= 0;
// });

// const allPositive = numbers.every((value) => {
//   return value >= 0;
// });


// every() checks to see if every element in a given array matches
// the given criteria
// some() checks to see if we have at least one element that matches
// the given criteria