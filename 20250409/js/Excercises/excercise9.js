// Exercise 4: Fruit Price
// Ask the user to enter the name of a fruit (apple, banana, mango, etc.).
// Use a switch statement to display the price of that fruit.

let fruit = prompt("Enter the name of any fruit");
switch (fruit) {
  case "Mango":
    document.body.innerHTML = "The price of Mango is 250/kg";
    break;
  case "Apple":
    document.body.innerHTML = "The price of Apple is 100/kg";
    break;
  case "Banana":
    document.body.innerHTML = "The price of Banana is 200/kg";
    break;
  case "Cherry":
    document.body.innerHTML = "The price of Cherry is 150/kg";
    break;
  default:
    document.body.innerHTML = "Enter valid Fruit";
    break;
}
