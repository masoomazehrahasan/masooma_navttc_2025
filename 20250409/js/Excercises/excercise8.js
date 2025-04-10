// Exercise 3: Grade Comments
// Ask the user to enter a letter grade (A, B, C, D, F).
// Use a switch statement to show a comment:

// A = "Excellent"

// B = "Very Good"

// C = "Good"

// D = "Needs Improvement"

// F = "Fail"

let grade = prompt("Enter a grade A, B, C, D, Fail");
switch (grade) {
  case "A":
    document.body.innerHTML = "It's Sunday";
    break;
  case "B":
    document.body.innerHTML = "It's Monday";
    break;
  case 3:
    document.body.innerHTML = "It's Tuesday";
    break;
  case 4:
    document.body.innerHTML = "It's Wednesday";
    break;
  case 5:
    document.body.innerHTML = "It's Thursday";
    break;
  case 6:
    document.body.innerHTML = "It's Friday";
    break;
  case 1:
    document.body.innerHTML = "It's Saturday";
    break;
  default:
    document.body.innerHTML = "Enter Number Between 1 - 7";
    break;
}
