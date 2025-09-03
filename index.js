// const form = document.querySelector("form");
// const fruits = document.querySelector(".fruits");
// const existingFruits = fruits.querySelectorAll("li");
// for (let i = 0; i < existingFruits.length; i++) {
//   const editBtn = document.createElement("button");
//   editBtn.className = "edit-btn";
//   editBtn.textContent = "Edit";
//   existingFruits[i].appendChild(editBtn);
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const fruitsAdd = document.getElementById("fruit-to-add");

//   const newLi = document.createElement("li");
//   newLi.className = "fruit";
//   newLi.innerHTML = fruitsAdd.value + '<button class="delete-btn">x</button>';
//   fruits.appendChild(newLi);
//   fruitsAdd.value = "";
// });

// fruits.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete-btn")) {
//     const fruitToDelete = event.target.parentElement;
//     fruits.removeChild(fruitToDelete);
//   }
// });

// Task filter Functionality

const form = document.querySelector("form");
const descriptionInput = document.createElement("input");
descriptionInput.type = "text";
descriptionInput.id = "description";
descriptionInput.placeholder = "Enter fruit description";

const addButton = form.querySelector("button");
form.insertBefore(descriptionInput, addButton);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitInput = document.getElementById("fruit-to-add");
  const description = document.getElementById("description");

  const fruitName = fruitInput.value.trim();
  const fruitDes = description.value.trim();

  if (!fruitName || !fruitDes) return;
  const li = document.createElement("li");
  li.className = "fruit";

  const nameText = document.createTextNode(fruitName);
  const descPara = document.createElement("p");
  descPara.innerHTML = `<em>${fruitDes}</em>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "x";

  li.appendChild(nameText);
  li.appendChild(descPara);
  li.appendChild(deleteBtn);

  document.querySelector(".fruits").appendChild(li);

  fruitInput.value = "";
  description.value = "";
});

document.querySelector(".fruits").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const li = event.target.parentElement;
    li.remove();
  }
});

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    let descriptionText = "";
    const descElement = fruitItems[i].querySelector("p");
    if (descElement) {
      descriptionText = descElement.textContent.toLowerCase();
    }
    if (
      currentFruitText.includes(textEntered) ||
      descriptionText.includes(textEntered)
    ) {
      fruitItems[i].style.display = "flex";
    } else {
      fruitItems[i].style.display = "none";
    }
  }
});
