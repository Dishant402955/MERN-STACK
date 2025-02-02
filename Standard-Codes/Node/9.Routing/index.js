import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`<h1> Home Page !!</h1> <br/>
                <a href='/about'> about </a> <br/>
                <a href='/contact'> contact </a> <br/>
                <a href='/skills'> skills </a> <br/>
                `);
    } else if (req.url === "/about") {
        res.end(`<h1>About us !!</h1> <br/>
                <a href='/about/why-us'> why-us </a>
                `);
    } else if (req.url == "/contact") {
        res.end(`<h1>contact us !!</h1> <br/>
                <a href='/contact/mail-us'> mail-us </a>
                `);
    } else if (req.url == "/skills") {
        res.end("<h1>Skills !!!</h1>");
    } else if (req.url == "/about/why-us") {
        res.end("<h1>why choose us ?</h1>");
    } else if (req.url == "/contact/mail-us") {
        res.end("<h1>example@main.com</h1>");
    } else {
        res.statusCode = 404;
        res.statusMessage = "Not found(Given by me)";
        res.end("<br/> <br/> <h1> 404 Page Not Found :( </h1>");
    }
});

server.listen(8080, () => {
    console.log("Server Up !!!!");
});