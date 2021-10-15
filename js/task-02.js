const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((option) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = option;

  return element;
});

list.append(...items);
