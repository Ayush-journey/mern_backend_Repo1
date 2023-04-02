require('dotenv').config();
const express = require('express');
const mongodb = require('mongoose'); 

const app = express();
app.use(express.json());

const Port = process.env.PORT || 5000;

try{
    mongodb.connect(process.env.MONGO_URL);
    console.log('Connected to Database')
} catch(err){
    console.log('Unable to Connect to the Database');
}

app.listen(Port, ()=>{
    console.log(`Listening at ${Port}`);
});



