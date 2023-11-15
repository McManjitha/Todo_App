const dotenv = require("dotenv");
dotenv.config({path: ".env"});

const dbUrl = process.env.DB_HOST;
const port = process.env.PORT;

module.exports = {dbUrl, port}