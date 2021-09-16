function interests(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interests(10000, 3.5, 5));