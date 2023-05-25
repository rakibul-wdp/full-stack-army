const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello World</h1>");
    res.statusCode = 200;
    res.end();
  } else if (req.url === "/hello") {
    res.write("<h1>Hello Guest</h1>");
    res.statusCode = 200;
    res.end();
  } else {
    res.write("<h1 style='color: red;'>404 Not Found</h1>");
    res.statusCode = 200;
    res.end();
  }
})

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
})