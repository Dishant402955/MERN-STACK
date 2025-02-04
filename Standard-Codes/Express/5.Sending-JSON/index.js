import express from "express";
import  student  from "./data/student.js";

const app = express();

app.get("/student", (req, res) => {
    res.json(student);
})

app.listen(8080, () => {
    console.log("\n\nServer is Up to listen !!!\n");
})