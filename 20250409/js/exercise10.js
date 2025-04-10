// Exercise 5: Traffic Light
// Ask the user to enter a traffic light color (red, yellow, green).
// Use a switch statement to show the appropriate message:

// Red = "Stop";

// Yellow = "Ready";

// Green = "Go";

let light = prompt("Enter the traffic light color (Red, Yellow, Green)");
switch (light) {
  case "Red":
    document.body.innerHTML = "Stop";
    break;
  case "Yellow":
    document.body.innerHTML = "Ready";
    break;
  case "Green":
    document.body.innerHTML = "Go";
    break;
  default:
    document.body.innerHTML = "Enter valid traffic light color";
    break;
}
