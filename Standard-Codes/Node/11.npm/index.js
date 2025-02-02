import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.statusMessage = "Happy :) ";
  res.setHeader("content-type", "text/html");
  res.end("<h1>What you doing brother , node.js server this side !!!");
});

server.listen(8080, () => console.log("server is Up!!!"));
