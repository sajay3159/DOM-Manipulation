const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
const existingFruits = fruits.querySelectorAll("li");
for (let i = 0; i < existingFruits.length; i++) {
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";
  existingFruits[i].appendChild(editBtn);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitsAdd = document.getElementById("fruit-to-add");

  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML = fruitsAdd.value + '<button class="delete-btn">x</button>';
  fruits.appendChild(newLi);
  fruitsAdd.value = "";
});

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
