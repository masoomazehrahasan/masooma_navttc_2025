// Exercise 5: Grading System
// Ask the user to enter their marks out of 100.
// Use if-else if statements to display the grade based on the marks:

// 90 and above: Grade A

// 80–89: Grade B

// 70–79: Grade C

// 60–69: Grade D
//
// Below 60: Fail

let marks = prompt("Enter marks out of 100");
if (marks >= 90) {
  document.body.innerHTML = "Grade A ";
} else if (marks >= 80) {
  document.body.innerHTML = "Grade B";
} else if (marks >= 70) {
  document.body.innerHTML = "Grade C";
} else if (marks >= 60) {
  document.body.innerHTML = "Grade D";
} else {
  document.body.innerHTML = "Fail";
}
