import path from "path";
import express from "express";

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "./public/index.html"));
});


app.listen(8080, () => {
    console.log("\nServer is Up ~~~~\n");
});