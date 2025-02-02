import * as one from "./module1.js";
import * as two from "./module2.js";

const id = 3;

function helloNested() {
    console.log("Hello from nested module !!!");
}
export { one, two, helloNested, id };