const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
//Installing mongoose to acces my server

const app = express();
const port = process.env.PORT || 5000;

//connectind to my env file.
require('dotenv').config();

//This is the middleware. This will allow me to pass json 
app.use(cors());
app.use(express.json());

//connecting to MongoDB
const myURI = process.env.ATLAS_URI;
mongoose.connect(myURI, {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true});


const connection = mongoose.connection;
connection.on('open', ()=>{
    console.log("MongoDB database connection established succesfully");
})




//Importing files from bot data
const botRouter = require('./routes/botdata');

app.use('/botdata', botRouter);



//get contents fro meach folder
app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public'));

//sendinf file which runs at port 5000
app.get('/', (req, res)=>{
    res.sendFile('index.html');
});

//Local server.
app.listen(port, ()=>{
    console.log('This port runs at '+ 5000)
})