const { Person } = require("./person");
const dotEnv = require("dotenv");
const connectDB = require("./src/database/connect");

dotEnv.config();
connectDB();




require("./modules/express");

// const person = new Person("John");

// require('./modules/path');
//require("./modules/fs");
