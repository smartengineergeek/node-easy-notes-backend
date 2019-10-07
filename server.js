const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// parse request of content-type - application-json
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('successfully connected to the database')
}).catch(err => {
    console.log('could not connect to the database.Exiting now...', err);
    process.exit();
})


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to easy notes application"});
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

//listen for requests

app.listen(8000, () => { 
    console.log('We are live on 8000'); 
});
