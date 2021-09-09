// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && false);

// Logical OR (||)
// Returns TRUE if one of the operands are TRUE
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible:', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused:', applicationRefused);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);