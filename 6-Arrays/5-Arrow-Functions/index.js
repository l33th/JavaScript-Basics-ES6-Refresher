const courses = [
  {id: 1, name: 'hkr'},
  {id: 2, name: 'dvlpr'},
];

// console.log(courses.includes({id: 1, name: 'hkr'}));

// This is the same as the line following after, but less clean
// const course = courses.findIndex((course) => {return course.name === 'dvlpr'});

const course = courses.findIndex(course => course.name === 'dvlpr');

console.log(course);