const courses = [
  {id: 1, name: 'dvlpr'},
  {id: 2, name: 'hkr'},
];

courses.sort((a, b) => {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  else if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);
