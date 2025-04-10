// Exercise 2: Calculator
// Ask the user to enter two numbers and an operator (+, -, *, /).
// Use a switch statement to perform the operation and display the result.

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let op = prompt("Enter operation you want to perform");
switch (op) {
  case "+":
    a + b;
    break;
  case "-":
    a - b;
    break;
  case "*":
    a * b;
    break;
  case "/":
    a / b;
    break;
  case "%":
    a % b;
    break;
  case "**":
    a ** b;
    break;
  default:
    "Use right Arthimetic Operator!";
    break;
}
