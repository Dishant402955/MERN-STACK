const list = document.querySelector("ul");

const newItem = document.createElement('li');
newItem.innerText = "Hello This is a new element added thorugh JS";

list.appendChild(newItem)

list.prepend(newItem)
