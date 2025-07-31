# FullStackClub Node.js Course

This project is a RESTful API built with Node.js, Express, and MongoDB (Mongoose) as part of the Full Stack Club course.

## Features

- User registration (first name, last name, email, password)
- List all users
- Get user by ID
- Update user data
- Delete user
- CORS middleware and request logging
- User manipulation via Axios (client-side requests)

## Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- JavaScript
- Axios

## How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevMurilol/FullStackClub-nodejs_course.git
   cd FullStackClub-nodejs_course
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the project root:
   ```
   MONGODB_USERNAME=your_username
   MONGODB_PASSWORD=your_password
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```
   The server will run at `http://localhost:8080`.

## API Endpoints

- `GET /home` — Home page
- `GET /users` — List all users
- `GET /users/:id` — Get user by ID
- `POST /users` — Create a new user
- `PATCH /users/:id` — Update user
- `DELETE /users/:id` — Delete user

## Axios Usage Example

You can manipulate users using Axios functions defined in `modules/userApi.js`.  
Example usage in your code:

```javascript
const { createUser, updateUser, deleteUser, getUsers, getUserById, User } = require("./modules/userApi");

// Create a new user
const newUser = new User("John", "Doe", "john@email.com", "password123");
createUser(newUser);

// Update a user's first name
updateUser("USER_ID_HERE", { firstName: "Jane" });

// Delete a user
deleteUser("USER_ID_HERE");

// Get all users
getUsers();

// Get user by ID
getUserById("USER_ID_HERE");
```

## Project Structure

```
src/
  models/
    user.model.js
  database/
    connect.js
modules/
  express.js
  userApi.js
index.js
```

## Notes

- Make sure your MongoDB Atlas credentials are correct in the `.env` file.
- CORS is enabled for easy testing with tools like Postman.
- Axios functions allow you to interact with the API programmatically.

---

Educational
