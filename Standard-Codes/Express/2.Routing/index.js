import express from "express";
// for  express-routers demonstration
import students from "./routes/students.js";
import employees from "./routes/employees.js";
import teachers from "./routes/teachers.js";


const app = express();


// //basic Routing
// app.get("/", (req, res) => {
//     res.send("<h1> Home page </h1>");
// });
// app.get("/about", (req, res) => {
//     res.send("<h1>About page</h1>");
// })


// //nested Routing
// app.get("/contact", (req, res) => {
//     res.send(`<h1>contact page</h1>
//             <br/><br/>
//             <a href="contact/emails"> Email </a>`);
// })
// app.get("/contact/emails", (req, res) => {
//     res.send(`<h1>contact page</h1>
//             <br/><br/>
//             <a href="emails/email1"> Email1 </a>
//             <a href="emails/email2"> Email2 </a>`);
// })
// app.get("/contact/emails/email1", (req, res) => {
//     res.send("<h1>one@mail.com");
// });
// app.get("/contact/emails/email2", (req, res) => {
//     res.send("<h1>two@mail.com");
// });


// // app.route() method
// app.route("/contact/emails/email1")
//     .get((req, res) => res.send("get Method"))
//     .post((req, res) => res.send("post Method"))
//     .put((req, res) => res.send("put Method"))
//     .delete((req, res) => res.send("delete Method"))
//     .patch((req, res) => res.send("patch Method"));

// express-routers
app.use("/students", students);
app.use("/employees", employees);
app.use("/teachers", teachers);

// Route params
app.get("/:user/delete/:id", (req, res) => {
    const { id, user } = req.params;
    res.send(`${user} ${id} deleted`);
});


app.listen(8080, () => {
    console.log("\n\nServer is Up !!\n\n");
});