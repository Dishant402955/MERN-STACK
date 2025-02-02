import http from "http";

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(res);
    // res.setHeader("Content-Type", "text/html");
    // res.write("<h1>Hello from node.js Server</h1>");
    // res.statusCode = 404;
    // res.statusMessage = "Not Found";
 });

server.listen(8080, () => {
    console.log("Server is up!!!");
});