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
// let tagName = document.getElementsByTagName("li");
// tagName[4].style.color = "blue";

// for (let i = 0; i < tagName.length; i++) {
//   tagName[i].style.fontStyle = "italic";
// }

// querySelector & querySelectorAll Methods
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.listStyleType = "none";

const baseketHeading = document.querySelector("h2");
baseketHeading.style.marginLeft = "30px";
baseketHeading.style.color = "brown";

const fruitsItems = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitsItems.length; i++) {
  fruitsItems[i].style.backgroundColor = "white";
  fruitsItems[i].style.padding = "10px";
  fruitsItems[i].style.margin = "10px";
  fruitsItems[i].style.borderRadius = "5px";
}

const oddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i < oddFruitItems.length; i++) {
  oddFruitItems[i].style.backgroundColor = "lightgray";
}
// Write answer to the questions asked below:

let evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = "brown";
  evenFruitItems[i].style.color = "white";
}
