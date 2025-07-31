const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const port = 8080;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
  console.log(`Request received: ${req.method} ${req.url}`);
  console.log("Request body:", req.body);
  console.log("Request headers:", req.headers);

  next(); // Pass control to the next middleware
});

const UserModel = require("../src/models/user.model");
app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Welcome to the Home Page with express</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({}); // Fetch all users from the database
    res.status(200).json(users); // Return the found users
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }

  // Here you would typically fetch users from the database
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id); // Fetch user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated user
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});
app.post("/users", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body); // Assuming you have middleware to parse JSON body
    // Here you would typically save the new user to the database

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running with express on port ${port}`);
});
