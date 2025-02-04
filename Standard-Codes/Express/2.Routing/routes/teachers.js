import express from "express";

const router = express.Router();

router
    .get("/all", (req, res) => res.send("get all teachers"))
    .post("/new", (req, res) => res.send("post new teachers"))
    .delete("/remove", (req, res) => res.send("delete teachers"))
    .put("/update", (req, res) => res.send("update teachers"));

// can use nested routing here but kept simple for demonstration purpose

export default router;