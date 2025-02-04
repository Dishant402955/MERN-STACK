import express from "express";

const app = express();

app.get("/products", (req, res) => {
    const { category, id } = req.query;
    res.send(`Product category=${category} id=${id}`);
})

app.listen(8080, () => {
    console.log("\n\nServer Up!!!\n");
})