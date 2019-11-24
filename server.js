// Call in installed dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dbConfig = require('./config/database.config.js');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true, user: process.env.user, pass: process.env.pass, keepAlive: true,
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});

require('./server/routes/Cameras.routes')(app);  // Require Cameras routes

// set up port number
const port = 5035;
app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});
