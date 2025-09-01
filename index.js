// Write your code below:
// getElementById
// const mainHeading = document.getElementById("main-heading");
// mainHeading.textContent = "Fruit World";

// mainHeading.style.color = "orange";

// const headerDiv = document.getElementById("header");
// headerDiv.style.backgroundColor = "green";

// headerDiv.style.borderBottom = "4px solid orange";

// const basketHeading = document.getElementById("basket-heading");
// basketHeading.style.color = "green";

// const thanksDiv = document.getElementById("thanks");
// const paragraph = document.createElement("p");

// paragraph.textContent = "Please visit us again";
// thanksDiv.appendChild(paragraph);

// getElementByClassName
// let fruitClass = document.getElementsByClassName("fruit");
// fruitClass[2].style.backgroundColor = "yellow";

// for (let i = 0; i < fruitClass.length; i++) {
//   fruitClass[i].style.fontWeight = "bold";
// }

// getElementsByTagName
let tagName = document.getElementsByTagName("li");
tagName[4].style.color = "blue";

for (let i = 0; i < tagName.length; i++) {
  tagName[i].style.fontStyle = "italic";
}
