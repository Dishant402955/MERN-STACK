import * as fs from "fs";

fs.mkdirSync("D:/Others/node-practice/newOne", { recursive: true});
console.log("Directory Created Successfully !!!");

fs.rmdirSync("D:/Others/node-practice/new");
console.log("\nDirectory Removed Successfully !!!");