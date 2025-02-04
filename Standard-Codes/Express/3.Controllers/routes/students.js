import express from "express";
import * as student from "../controllers/student.js";

const router = express.Router();

router
    .get("/all", student.allStudents)
    .post("/new", student.newStudents)
    .delete("/remove", student.deleteStudents)
    .put("/update", student.updateStudents);

export default router;