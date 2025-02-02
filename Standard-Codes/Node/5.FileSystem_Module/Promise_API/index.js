import * as fs from "fs/promises";

// // Creating Folder

// try {
//   await fs.mkdir("D:/Others/node-practice");
//   console.log("Folder Created Successfully !!");
// } catch (error) {
//   console.log(error);
// }

// try {
//   await fs.mkdir("D:/Others/node-practice/random-Folder", { recursive: true });
//   console.log("Folder Created Successfully !!");
// } catch (error) {
//   console.log(error);
// }

// ------------------------------------------------------------------------------------------

// // read dir content

// try {
//   const files = await fs.readdir("D:/Ollama");
//   console.log(files);
// } catch (error) {
//   console.log(error);
// }

// ------------------------------------------------------------------------------------------

// // remove dir

// try {
//   await fs.rmdir("D:/Others/node-practice/remove-this");
//   console.log("Folder removed Successfully !!");
// } catch (error) {
//   console.log(error);
// }

// ------------------------------------------------------------------------------------------

// // File Manupilation

// // Create and Write files

// try {
//   await fs.writeFile(
//     "D:/Others/node-practice/random-Folder/sample.txt",
//     "If this file doesn't exists then it will created at runtime !!\nOtherwise it wil be just updated!!"
//   );
// } catch (error) {
//   console.log(error);
// }

// // Read file

// try {
//   const data = await fs.readFile(
//     "D:/Others/node-practice/random-Folder/sample.txt",
//     "utf-8"
//   );
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// // append file

// try {
//   await fs.appendFile(
//     "D:/Others/node-practice/random-Folder/sample.txt",
//     "\n\nThis File is Appended Through Node.js"
//   );
// } catch (error) {
//   console.log(error);
// }

// // Copy File

// try {
//   await fs.copyFile(
//     "D:/Others/node-practice/random-Folder/sample.txt",
//     "D:/Others/node-practice/random-Folder/copied.cpp"
//   );
// } catch (error) {
//   console.log(error);
// }

// // Get File Information

// try {
//   const metaData = await fs.stat(
//     "D:/Others/node-practice/random-Folder/sample.txt"
//   );
//   console.log(metaData);
//   console.log(`Is File ? : ${metaData.isFile()}`);
//   console.log(`Is Directory : ${metaData.isDirectory()}`);
// } catch (error) {
//   console.log(error);
// }

// ------------------------------------------------------------------------------------------