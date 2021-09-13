// street
// city
// zipCode
// showAddress(address)

const address = {
  street: '21 Arc Street',
  city: 'Arcyda',
  zipCode: 88088
};

// Instructor's solution
// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key])
//   }
// }

// My solution
function showAddress(address) {
  for (let key of Object.entries(address)) {
    console.log(key)
  }
}

showAddress(address);