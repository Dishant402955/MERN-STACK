import * as one from "./module1.js";
import * as two from "./module2.js";
import * as nested from "./nested.js";

console.log(`\nid : ${one.id}`);
one.hello1();

console.log(`\nid : ${two.id}`);
two.hello2();

console.log(`\nid : ${nested.one.id}`);
nested.one.hello1();
console.log(`\nid : ${nested.two.id}`);
nested.two.hello2();
console.log(`\nid : ${nested.id}`);
nested.helloNested();


