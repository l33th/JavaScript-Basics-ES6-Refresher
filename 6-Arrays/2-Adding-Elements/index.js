const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'hkr', 'dvlpr');

console.log(numbers);