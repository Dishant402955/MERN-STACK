import express from "express";
import * as teacher from "../controllers/teacher.js";

const router = express.Router();

router
    .get("/all", teacher.allTeachers)
    .post("/new", teacher.newTeachers)
    .delete("/remove", teacher.deleteTeachers)
    .put("/update", teacher.updateTeachers);

export default router;