require('dotenv').config();
const express = require('express');
const mongodb = require('mongoose'); 
const router = require('./routes/router');
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

const Port = process.env.PORT || 5000;

try{
    mongodb.connect(process.env.MONGO_URL);
    console.log('Connected to Database')
} catch(err){
    console.log('Unable to Connect to the Database');
}
app.use('/', router);

app.listen(Port, ()=>{
    console.log(`Listening at ${Port}`);
});



