let x = {value: 10};
let y = x;

x.value = 20;

// ------------------------

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);
// ------------------------------------

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);