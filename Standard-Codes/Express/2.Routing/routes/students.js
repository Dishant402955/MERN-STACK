import express from "express";

const router = express.Router();

router
    .get("/all", (req, res) => res.send("get all students"))
    .post("/new", (req, res) => res.send("post new students"))
    .delete("/remove", (req, res) => res.send("delete students"))
    .put("/update", (req, res) => res.send("update students"));

// can use nested routing here but kept simple for demonstration purpose

export default router;