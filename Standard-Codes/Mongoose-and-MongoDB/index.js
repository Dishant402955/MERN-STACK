import express from "express";
import connectDB from "./db/connectDB.js";
import * as movie from "./models/movie.js";
import deviceModel from "./models/device.js";

const app = express();
const port = 8000;

const DATABASE_URL = "mongodb://127.0.0.1:27017";
connectDB(DATABASE_URL);

// movie.insertOneDoc();
// movie.insertManyDocs();
// const result = movie.getSingleDoc();
// console.log(result);
// movie.updateById("67a73f34aa6da8616cfa1fa7");
// movie.updateManyDocs();
// movie.deleteOneDoc("67a73f34aa6da8616cfa1fa7");
// movie.deleteManyDocs();

app.listen(port, () => {
  console.log(`\nServer is Up & Listening on port : ${port} ~~~`);
});
