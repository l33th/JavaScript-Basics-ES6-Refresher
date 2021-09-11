for (let i = 0; i < 5; i++) {
    console.log('Hello', i);
}

console.log('\nThis displays odd numbers between 0 and 5\n-------------\n')

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

console.log('\nThis is in reverse\n-----------\n')
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}