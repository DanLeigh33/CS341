const dotenv = require("dotenv");

dotenv.config();

const MongoClient = require('mongodb').MongoClient;
const URI = process.env.URI;

let db;

const connectDB = async() => {
    await MongoClient.connect(URI)
    .then((client) => {
      db = client;
    })
    console.log("database connected.");
}

const getDatabase = () =>{
    return db;
}

module.exports = { connectDB, getDatabase};