import express from "express";
//importing middleware
import userCredentials from "./middlewares/logs.js";

const app = express();

// // This middleware will run for every single connection/request also with any route
// app.use(userCredentials);

// // This middleware will run for every single connection/request for the specific route
// app.use("/products", userCredentials);

app.get("/", (req, res) => {
    res.send("Hello verified user !!!")
});

app.listen(8080, () => {
    console.log("Server is Up ~~~");
});