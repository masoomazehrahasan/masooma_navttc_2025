// Exercise 4: Compare Two Numbers
// Ask the user to enter two numbers.
// Use if-else to determine which number is greater, or if they are equal.

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
if (num1 > num2) {
  document.body.innerHTML = "The number " + num1 + " is greater than " + num2;
} else if (num2 > num1) {
  document.body.innerHTML = "The number " + num2 + " is greater than " + num1;
} else {
  document.body.innerHTML =
    "The number " + num1 + " and " + num2 + " are equal";
}
