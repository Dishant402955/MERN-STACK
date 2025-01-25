//--------------------------------------------------------------------------------------

// // map
// // map are same as object but it allows to create keys with any datatype unlike object who allows only string

// const myMap = new Map();
// console.log(myMap);

// myMap.set(true, "yes!!!");
// console.log(myMap);

// myMap.set((num) => num * 2, "doubling");
// console.log(myMap);

// myMap.set(123, 234);
// myMap.set("fdg", undefined);
// myMap.set(1, "one");
// myMap.set(undefined, "232");

// console.log();
// console.log(myMap);
// console.log();

// console.log("\n\nAll the keys :\n",myMap.keys());

// console.log("\n\nAll the values : \n",myMap.values());

// myMap.delete(123);
// console.log("\n\nAfter deletion of pair with key 123 :", myMap);

// console.log("\nSize of map : ", myMap.size);

// console.log("\n\nIterating over the map : ");
// for (let [key, value] of myMap) {
//     console.log("Key :", key, ",", "value :", value);
// }

//--------------------------------------------------------------------------------------

// // set
// // it is similar to general concept and also stores everything in order

// const mySet = new Set();
// console.log("\nSize of mySet :", mySet.size);
// console.log("mySet :", mySet);

// const arr = [1, 2, 2, 2, 2, 3, 4, 5, 5, 5, 7, 7, 7, 889];
// const mySet2 = new Set(arr);
// console.log("\nSize of mySet2 :", mySet2.size);
// console.log("mySet2 :", mySet2);

// mySet2.add(10);
// console.log("\nSize of mySet2 :", mySet2.size);
// console.log("mySet2 :", mySet2);

// mySet2.add([10, 11, 12]);
// console.log("\nSize of mySet2 :", mySet2.size);
// console.log("mySet2 :", mySet2);

// mySet2.delete(1);
// console.log("\nSize of mySet2 :", mySet2.size);
// console.log("mySet2 :", mySet2);
// mySet2.delete(5);
// console.log("\nSize of mySet2 :", mySet2.size);
// console.log("mySet2 :", mySet2);

// console.log("\n\nmySet2.has(2)", mySet2.has(2));
// console.log("mySet2.has(1)", mySet2.has(1));

//--------------------------------------------------------------------------------------