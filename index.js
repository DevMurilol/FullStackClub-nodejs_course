const { Person } = require("./person");
const dotEnv = require("dotenv");
const connectDB = require("./src/database/connect");

dotEnv.config();
connectDB();
console.log("MONGODB_USERNAME:", process.env.MONGODB_USERNAME);
console.log("MONGODB_PASSWORD:", process.env.MONGODB_PASSWORD);

require("./modules/http");
require("./modules/express");

const person = new Person("John");

// require('./modules/path');
//require("./modules/fs");
