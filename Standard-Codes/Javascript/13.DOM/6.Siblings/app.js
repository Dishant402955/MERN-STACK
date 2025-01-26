const listItem = document.querySelector("li");
const list = document.querySelector("ul");
const div = document.querySelector("div");

console.log(listItem.parentElement);
console.log(list.children);
console.log(div);
console.log(div.childElementCount);


console.log(listItem.nextElementSibling.textContent);
console.log(listItem.nextElementSibling.previousElementSibling.textContent);