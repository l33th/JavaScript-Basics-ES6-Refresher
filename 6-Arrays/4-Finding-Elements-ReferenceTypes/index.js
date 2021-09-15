const courses = [
  {id: 1, name: 'hkr'},
  {id: 2, name: 'dvlpr'},
];

// console.log(courses.includes({id: 1, name: 'hkr'}));

const course = courses.findIndex(function(course) {
  return course.name === 'hkr';
});

console.log(course);