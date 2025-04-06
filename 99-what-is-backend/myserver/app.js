const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        msg: "Welcome to full stack army advanced backend course",
      })
    );
    res.end();
  }
  res.end();
});

server.listen(4000, () => {
  console.log("Server is listening on PORT 4000");
});
