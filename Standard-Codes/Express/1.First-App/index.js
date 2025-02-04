import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express.js</h1>");
});

app.listen(8000, () => {
    console.log("Server is Up!!!");
});