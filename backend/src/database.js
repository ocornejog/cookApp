const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Database string 
const db = process.env.MONGO_DB_URI;

dotenv.config();

const mongoDB = db;

//connect to MongoDB
mongoose
    .connect(mongoDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((res) => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Not Connected -->", err));