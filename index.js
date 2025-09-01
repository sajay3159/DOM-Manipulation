// Write your code below:
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";

mainHeading.style.color = "orange";

const headerDiv = document.getElementById("header");
headerDiv.style.backgroundColor = "green";

headerDiv.style.borderBottom = "4px solid orange";

const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

const thanksDiv = document.getElementById("thanks");
const paragraph = document.createElement("p");

paragraph.textContent = "Please visit us again";
thanksDiv.appendChild(paragraph);
