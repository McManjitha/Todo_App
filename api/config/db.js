
const mongoose = require("mongoose");
const server = require("./server")


async function connectToDb(){
    try{
        await mongoose.connect(server.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");

    } catch(error){
        console.error('Mongodb connection error : ', error);
    }
}

module.exports = connectToDb;