const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();


app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

const mongoose = require('mongoose');
const connection = process.env.ATLAS;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

//API
const users = require('./api/users');
app.use('./api/users', users);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})


app.get('/acquire',(req, res)=>{
        const information = {
            name: 'Hi Im an express api',
            description: 'I can do this all day'
        }
        res.json(information);
})

//process.env.PORT ||
const port = 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});