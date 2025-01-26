const one = document.querySelector(".one").classList;
const two = document.querySelector(".two").classList;
const three = document.querySelector(".three").classList;
const four = document.querySelector(".four").classList;
const five = document.querySelector(".five").classList;
const six = document.querySelector(".six").classList;


console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);

one.add("new");
two.add("another-one");
three.remove("two");
three.remove("one");

console.log(one);
console.log(two);
console.log(three);

four.toggle("hey");
console.log(four);