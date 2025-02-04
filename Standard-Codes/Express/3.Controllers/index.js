import express from "express";
import students from "./routes/students.js";
import employees from "./routes/employees.js";
import teachers from "./routes/teachers.js";

const app = express();

app.use("/students", students);
app.use("/employees", employees);
app.use("/teachers", teachers);


app.listen(8080, () => {
  console.log("\n\nServer is Up !!\n\n");
});
