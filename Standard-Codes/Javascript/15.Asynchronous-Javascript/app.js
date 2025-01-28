//--------------------------------------------------------------------------------------

// Synchronous code v/s asynchronous code

// // Synchronous code
// function print() {
//     console.log("inside the function");
// }

// console.log("first");
// print();
// console.log("Second");


// // Asychronous code
// function print() {
//     console.log("Inside timeout function");
// }

// console.log("first");
// setTimeout(print, 3000);
// console.log("second");

//--------------------------------------------------------------------------------------

// // callback hell

// function callbackhell(callback) {
//     setTimeout(() => {
//         const data = "inside the callback hell !!";
//         console.log(data);
//         callback(data);
//     }, 2000);
// }

// function firstFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed first`;
//         console.log(`Inside (firstFunc) function`);
//         callback(processedData);
//     }, 1000);
// }

// function secondFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - processed second`;
//         console.log(`Inside (secondFunc) Function`);
//         callback(processedData);
//     }, 1500);
// }

// callbackhell((data) => {
//     firstFunc(data, (processedData1) => {
//         secondFunc(processedData1, (processedData2) => {
//             console.log(`Final result of all functions : ${processedData2}`);
//         })
//     })
// });

// // The upper code is a valid asynchronous code
// // & can be refactored using promises
//--------------------------------------------------------------------------------------

// // Promises

// function callbackhell() {
    //     return new Promise((resolve) => {
        //         setTimeout(() => {
            //             const data = "Inside the callbackhell function";
            //             console.log(data);
//             resolve(data);
//         }, 2000);
//     });
// }

// function firstFunc(data) {
    //     return new Promise((resolve) => {
        //         setTimeout(() => {
            //             const processedData = `${data} - processed data 1`;
            //             console.log("Inside (firstFunc) function");
            //             resolve(processedData);
            //         }, 2000);
            //     });
            // }
            
// function secondFunc(data) {
//         return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const processedData = `${data} - processed data 2`;
//                     console.log("Inside (secondFunc) function");
//                     resolve(processedData);
//                 }, 1500);
//             });
// }

// callbackhell()
//     .then((data) => firstFunc(data))
//     .then((processedData) => secondFunc(processedData))
//     .then((processedData2) => console.log(`Final resukt of all the functions ${processedData2}`))
//     .catch((error) => console.log(error));

//--------------------------------------------------------------------------------------

// // Async & await
// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data retrieved from the server !")
//         }, 4000);
//     });
// }

// async function getUserData() {
//     try {
//         const data = await fetchDataFromServer();
//         console.log(data);
//         console.log("Remaining task can be executed here !!");
//     } catch (error) {
//         console.log(`Error : ${error}`);
//     }
// }

// getUserData();

//--------------------------------------------------------------------------------------

// function callbackhell() {
//         return new Promise((resolve) => {
//                 setTimeout(() => {
//                         const data = "Inside the callbackhell function";
//                         console.log(data);
//                         resolve(data);
//                 }, 2000);
//         });
// }

// function firstFunc(data) {
//         return new Promise((resolve) => {
//                 setTimeout(() => {
//                         const processedData = `${data} - processed data 1`;
//                         console.log("Inside (firstFunc) function");
//                         resolve(processedData);
//                 }, 2000);
//         });
// }
            
// function secondFunc(data) {
//         return new Promise((resolve) => {
//                 setTimeout(() => {
//                     const processedData = `${data} - processed data 2`;
//                     console.log("Inside (secondFunc) function");
//                     resolve(processedData);
//                 }, 1500);
//         });
// }

// async function processedDataWithAsyncAwait() {
//     try {
    //         const data = await callbackhell();
//         const processedData1 = await firstFunc(data);
//         const processedData2 = await secondFunc(processedData1);
//         console.log(
//           `Final Result of all functions with async/await : ${processedData2}`
//         );
//     } catch (error) {
    //         console.log(`Error : ${error}`);
    //     }  
    // }

    // processedDataWithAsyncAwait();


//--------------------------------------------------------------------------------------