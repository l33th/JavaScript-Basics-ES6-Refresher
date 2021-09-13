const now = new Date();
const date = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

console.log(now);
console.log(now.toISOString());
console.log(now.toLocaleTimeString());
console.log(now.toTimeString());
console.log(now.toDateString());
console.log(date);
console.log(date2);
