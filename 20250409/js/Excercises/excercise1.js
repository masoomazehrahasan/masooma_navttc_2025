// Exercise 1: Positive or Negative
// Ask the user to enter a number using prompt.
// Write an if-else statement to check whether the number is positive, negative, or zero.

let n = prompt("Enter any number");
if (n > 0) {
  document.body.innerHTML = "The number " + n + " is positive";
} else if (n < 0) {
  document.body.innerHTML = "The number " + n + " is negitive";
} else {
  document.body.innerHTML = "The number " + n + " is zero";
}
