//--------------------------------------------------------------------------------------

// // const obj1 = { label: "value" };

// console.log("\nobj1 :", obj1);

// const obj2 = { fname: "Dishant" };
// console.log("obj2 :", obj2);

// const person = {
//     fname: "Dishant ",
//     lname: "radadiya",
//     roll: "ui23cs57",
//     marks: {
//         maths: 100,
//         os: 70,
//         dbms: 100,
//     },
// }
// console.log("\nperson :", person);

// console.log("\nperson.lname :", person.lname, ", person.marks.dbms :", person.marks.dbms);

// person['fname'] = "Mr. Dishant";
// console.log("\n\nperson['fname'] = 'Mr. Dishant' \n", person);
// person.marks.os = 80;
// console.log("\n\nperson.marks.os = 80 \n", person);
// delete person.lname;
// console.log("\n\ndelete person.lname \n", person);

// console.log();

//--------------------------------------------------------------------------------------

// const car = {};

// car.type = "tesla";
// car.model = "s";
// car.color = "black";

// console.log("\ncar : ", car);
// console.log("typeof car :", typeof car);

// car.type = "toyota";
// console.log("\ncar.type = 'toyota' : ", car);

// car.wheels = "brand new";
// console.log("car.wheels = 'brand new' : ", car);

// console.log();

//--------------------------------------------------------------------------------------


// // second one is new and better way to create object

// let a = 10;
// let b = 20;
// let c = 30;

// const obj1 = {
//     a: a,
//     b: b,
//     c: c,
//     prod: function (one, two) {
//         return one * two;
//     },
// };
// console.log("obj1 :", obj1);

// const obj2 = {
//     a,
//     b,
//     c,
//     prod: (one, two) => one * two,
// };
// console.log("obj2 :", obj2);

//--------------------------------------------------------------------------------------

// const person = {
//     fname: "Dishant",
//     lname: "Radadiya",
//     roll: "ui23cs57",
// }

// const {roll, fname, lname} = person;

// console.log();
// console.log("\nPerson :", person);
// console.log(`\nfname : ${fname}, lname : ${lname} , roll : ${roll}\n`);

//--------------------------------------------------------------------------------------

// const person = {
    //   fname: "Dishant",
    //   lname: "Radadiya",
    //   roll: "ui23cs57",
    // };
    
    // const { fname: new1, lname: new2, roll: new3 } = person;
    
    // console.log(`\nnew1 : ${new1}, new2 : ${new2} , new3 : ${new3}\n`);
    
//--------------------------------------------------------------------------------------

// const person = {
//   fname: "Dishant",
//   lname: "Radadiya",
//   roll: "ui23cs57",
// };

// const { fname: new1, ...rest } = person;

// console.log(`\nnew1 : ${new1}, rest : ${rest}\n`);

//--------------------------------------------------------------------------------------

// const person = {
//     fname: "Dishant",
//     lname: "Radadiya",
//     roll: "ui23cs57",
//     marks: {
//         os: 60,
//         dbms: 80,
//         python: 100,
//         dsa: 90,
//         cn: 70,
//     }
// };

// const { fname, lname, roll, marks: { os, dsa } } = person;

// console.log();
// console.log("fname :", fname);
// console.log("lname :", lname);
// console.log("roll :", roll);
// // console.log("marks :", marks);
// console.log("os :", os);
// console.log("dsa :", dsa);

//--------------------------------------------------------------------------------------