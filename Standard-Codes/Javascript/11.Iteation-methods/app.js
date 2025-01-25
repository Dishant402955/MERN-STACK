//--------------------------------------------------------------------------------------

// // for in loop

// const arr = ["hello", 10, true, null, "dfd"];

// console.log();
// for (const key in arr) {
//     console.log(key, arr[key]);
// }
// console.log();

//--------------------------------------------------------------------------------------

// // for of loop

// const arr = ["hello", 10, true, null, "dfd"];

// console.log();
// for (const iterator of arr) {
//     console.log(iterator);
// }
// console.log();

//--------------------------------------------------------------------------------------

// // forEach() method
// // it doesn't create new array like map

// let arr = [12, 34, 56, 78, 90, undefined];

// arr.forEach(
//     (one) => {
//         one *= 2;
//         console.log(one);
//     });

// console.log(arr);


//--------------------------------------------------------------------------------------

// // map() method
// // it creates new array and returns it

// let arr = [1, 2, 3, 4, 5];

// let doubled = arr.map((num) => num * 2);

// console.log("arr :", arr);
// console.log("doubled :", doubled);

//--------------------------------------------------------------------------------------

// // reduce() method
// // returns a singular value
// // here second parameter is initial/previous value for that singular value

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// sum = arr.reduce((p, c) => p + c, sum);

// console.log("\narr :", arr);
// console.log("Sum :", sum);

//--------------------------------------------------------------------------------------

// // filter() method
// // filters all the elements which passes the condition unlike find()

// let arr = [1, 2, 3, 4, 5];

// let odd = arr.filter((num) => num % 2);

// console.log("arr :", arr);
// console.log("odd :", odd);

//--------------------------------------------------------------------------------------

// // find() method
// // filters only the first elements which passes the condition unlike filter()

// let arr = [1, 2, 3, 4, 5];

// let odd = arr.find((num) => num % 2);

// console.log("arr :", arr);
// console.log("odd :", odd);

//--------------------------------------------------------------------------------------

// // every() method
// // always return a single boolean value

// const arr = [2, 4, 5, 6, 8];

// const ans1 = arr.every((num) => !(num % 2));
// const ans2 = arr.every((num) => num > 0);

// console.log("ans1 :", ans1);
// console.log("ans2 :", ans2);

//--------------------------------------------------------------------------------------

// // some() method
// // always returns a single boolean value

// const arr = [2, -4, 5, 6, 8];

// const ans1 = arr.some((num) => !(num % 2));
// const ans2 = arr.some((num) => num > 0);

// console.log("ans1 :", ans1);
// console.log("ans2 :", ans2);

//--------------------------------------------------------------------------------------