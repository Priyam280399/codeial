
//require the library
const mongoose = require('mongoose');

// mongoose.set('strictQuery', true);
//connect to the database
mongoose.connect('mongodb+srv://gudun28032000:gudun28032000@cluster0.c9p8qjs.mongodb.net/Codeial');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, "Error connecting to MongoDB"));

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});
module.exports=db;

