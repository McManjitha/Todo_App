const express = require('express');
const app = express();
const server = require("./config/server")
const db = require("./config/db")

const authRoute = require("./routes/authRoute")

app.use("/auth", authRoute);

app.listen(server.port, () =>{
    console.log(`Express server is listning on port ${server.port}`);
})

db();