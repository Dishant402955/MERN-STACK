const anchor = document.querySelector('a');
const input = document.querySelector('input');

console.log(anchor.getAttribute("href"));
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

input.setAttribute("placeholder", "Please Enter Your Name !!");
console.log(input.getAttribute("placeholder"));

anchor.setAttribute("href", "https://www.youtube.com");
console.log(anchor.getAttribute("href"));
