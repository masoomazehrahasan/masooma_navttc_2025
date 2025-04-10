// Exercise 3: Age Check
// Ask the user to enter their age.
// Use if-else to display whether the user is eligible to vote (18 or older) or not eligible.

let age = 21;

if (age >= 10) {
  document.body.innerHTML =
    "You are eligible for casting vote because your age is " + age;
} else {
  document.body.innerHTML =
    "You are not eligible for casting vote because your age is " + age;
}
