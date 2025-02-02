import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    console.log(req.url);
    
    if (req.url === "/") {
        res.statusCode = 200;
        res.statusMessage = "Ok";
        res.setHeader("content-type", "text/html");
        fs.readFile("./public/index.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else if (req.url === "/about.html") {
        res.statusCode = 200;
        res.statusMessage = "Ok";
        res.setHeader("content-type", "text/html");
        fs.readFile("./public/about.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else if (req.url === "/contact.html") {
        res.statusCode = 200;
        res.statusMessage = "Ok";
        res.setHeader("content-type", "text/html");
        fs.readFile("./public/contact.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else if (req.url === "/contact/email.html") {
        res.statusCode = 200;
        res.statusMessage = "Ok";
        res.setHeader("content-type", "text/html");
        fs.readFile("./public/contact/email.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.statusMessage = "not Found";
        res.setHeader("content-type", "text/html");
        fs.readFile("./public/404.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    }
})

server.listen(8080, () => {
    console.log("Server Up!!");
})