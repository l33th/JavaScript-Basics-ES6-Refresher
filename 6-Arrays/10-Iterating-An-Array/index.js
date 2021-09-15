const numbers = [1, 2, 3];

// Normal for of loop
for (let number of numbers)
  console.log('Print out for loop: ' + number);

  // forEach loop using a function
numbers.forEach(function(number) {
  console.log('Use a func: ' + number);
});

// forEach loop using normal arrow function
numbers.forEach((index, number) => {
  console.log('Normal arrow func: ' + index, number);
})
// Same as the one above
// numbers.forEach((index, number) => {
//   console.log(`Normal arrow func: ${index} ${number}`);
// })

// forEach loop using clean arrow function, single perameter
numbers.forEach(number => console.log('One param arrow func: ' + number));
numbers.forEach((i, number) => console.log('Two Param arrow func: ' + i, number));
