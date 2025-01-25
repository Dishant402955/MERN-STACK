//--------------------------------------------------------------------------------------

// function myFunc() {
//     console.log("\nThis is my function !!!\n");
// }

// myFunc();

//--------------------------------------------------------------------------------------

// function greet(myName) {
    // console.log(`\n hello ${myName} !!!`);
// }

// greet("Dishant");

//--------------------------------------------------------------------------------------

// function params(num1 , num2) {
//     console.log(`\nnum1 : ${num1} , num2 : ${num2}`);
//     return num1 + num2;
// }

// const sum = params(10, 22);
// console.log(`\nsum = ${sum}\n`);


//--------------------------------------------------------------------------------------

// const temp = function (arg) {
//     console.log(`\narg = ${arg}\n`);
// }

// temp(10);

//--------------------------------------------------------------------------------------

// function showcallback(fn) {
//     const value = 10;
//     fn(value);
// }

// const temp = function (arg) {
//     console.log(`\n(temp) arg = ${arg}`);
// }
// showcallback(temp);

// showcallback(function func(arg) {
//     console.log(`\narg = ${arg}\n`);
// });

//--------------------------------------------------------------------------------------

// const globalVar = 10;

// function test() {
//     console.log(`\nglobalVar : ${globalVar}`);

//     const localVar = 20;
//     console.log(`localVar : ${localVar}\n`);
// }

// test();

// // generates error due to scope of the localVar
// console.log(`localVar : ${localVar}\n`);

//--------------------------------------------------------------------------------------

// function greet() {
//     console.log(`\nWelcome Mr.${person.fname} ${person.lname} !!\n`);
// }

// const person = {
//     fname: "Dishant",
//     lname: "Radadiya",
// };

// greet();

//--------------------------------------------------------------------------------------

// function greet(obj) {
//   console.log(`\nWelcome Mr.${obj.fname} ${obj.lname} !!\n`);
// }

// const person = {
//   fname: "Dishant",
//   lname: "Radadiya",
// };

// greet(person);

//--------------------------------------------------------------------------------------

// const obj = {
//     one: 1,
//     two: 2,
//     greet: function (add) {
//         return obj.one + add;
//     },
//     three: 3,
// };

// console.log("\nobj :", obj);
// console.log("\nobj.greet(10) :", obj.greet(10));

//--------------------------------------------------------------------------------------

// const func = (fname, lname) => {
//     console.log(`\nHello Mr.${fname} ${lname}\n`);
// };
// func("Dishant", "Radadiya");

// const product = (num1, num2) => num1 * num2;
// console.log("product(11, 12) :", product(11, 12));

//--------------------------------------------------------------------------------------

// function mult(num1, num2 = 10) {
//     return num1 * num2;
// }

// console.log("\nmult(5, 7) :", mult(5,7));
// console.log("mult(5) :", mult(5));

//--------------------------------------------------------------------------------------

// setInterval(
//     () => console.log("Func with interval of 1000ms and will run for infinite time duration"),
//     1000);

// setTimeout(
//   () => console.log("Func with timeout of 3000ms and will complete execution after 3000ms"),
//     3000);

//--------------------------------------------------------------------------------------

// const interval = setInterval(() => {
//     console.log("Fn with 1000ms interval and  another fn will clear its interval after 10000ms");
// }, 1000);


// setTimeout(() => {
//     clearInterval(interval);
// }, 10000);

//--------------------------------------------------------------------------------------

// Rest Parameters using spread operator

// const fn1 = (one) => console.log(one);
// const fn2 = (one, two) => console.log(one, two);
// const fn3 = (one, two, three) => console.log(one, two, three);
// // using rest parameters techniques
// const withRestTechnique = (one, two, ...three) => console.log(one, two, three);

// console.log("input : 1, 2, 3, 4, 5, 6");
// fn1(1, 2, 3, 4, 5, 6);
// fn2(1, 2, 3, 4, 5, 6);
// fn3(1, 2, 3, 4, 5, 6);
// withRestTechnique(1, 2, 3, 4, 5, 6);

//--------------------------------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6];

// const fn1 = (one) => console.log(one);
// const fn2 = (one, two) => console.log(one, two);
// const fn3 = (one, two, three) => console.log(one, two, three);
// // using rest parameters techniques
// const withRestTechnique = (one, two, ...three) => console.log(one, two, three);

// console.log("arr :", arr);
// fn1(...arr);
// fn2(...arr);
// fn3(...arr);
// withRestTechnique(...arr);

//--------------------------------------------------------------------------------------