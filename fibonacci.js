// Fibonacci series up to n terms

// Gather user input
let prompt = require("prompt-sync")();
let num1 = 0, num2 = 1, nextTerm;
const number = parseInt(prompt("Enter number of series: "));

console.log(`Fibonacci series:`);

for (let i = 1; i <= number; i++) {
    console.log(num1 + " ");
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}
