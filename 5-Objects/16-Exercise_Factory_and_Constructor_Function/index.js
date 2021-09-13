// Factory Function
let createaddress = new createAddress('21 Arc Street', 'Arcyda', '88088');
console.log(createaddress);


function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}


let address = new Address('21 Arc Street', 'Arcyda', 88088)
console.log(address);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}