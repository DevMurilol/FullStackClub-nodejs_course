const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to the Home Page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Doe", age: 22 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
