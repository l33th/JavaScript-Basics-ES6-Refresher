// if the number is divisible by 3 => Fizz
// if the number is divisible by 5 => Buzz
// if the number is divisible by 3 and 5 like 15 => FizzBuzz
// if the number is not divisible by 3 or 5 => input  // we get the same input
// if the input is not a number => 'Not a number'
const output = fizzBuzz(15);

function fizzBuzz(input) {
    if (typeof input !== 'number')
    return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input
}

console.log(output);