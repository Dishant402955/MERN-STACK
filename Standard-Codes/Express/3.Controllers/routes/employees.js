import express from "express";
import * as employee from "../controllers/employee.js";

const router = express.Router();

router
    .get("/all", employee.allEmployees)
    .post("/new", employee.newEmployees)
    .delete("/remove", employee.deleteEmployees)
    .put("/update", employee.updateEmployees);

export default router;