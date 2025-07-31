const express = require("express");
const app = express();
const port = 8070;
app.get("/home", (req, res) => {
    res.contentType("text/html");
  res.status(200).send("<h1>Welcome to the Home Page with express</h1>");
});

app.get("/users", (req, res) => {
 const users = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Doe", age: 22 },
    ];
    res.json(users);
} )
app.listen(port, () => {
  console.log(`Server is running with express on port ${port}`);
});
