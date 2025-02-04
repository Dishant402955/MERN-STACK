import express from "express";

const router = express.Router();

router
    .get("/all", (req, res) => res.send("get all employees"))
    .post("/new", (req, res) => res.send("post new employees"))
    .delete("/remove", (req, res) => res.send("delete employees"))
    .put("/update", (req, res) => res.send("update employees"));

// can use nested routing here but kept simple for demonstration purpose

export default router;