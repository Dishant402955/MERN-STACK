import express from "express";
import route from "./routes/route.js";

const app = express();

app.set("view engine", "ejs");

app.use("/", route);

app.listen(8080, () => {
    console.log("\nServer Up ~~~~\n");
});
