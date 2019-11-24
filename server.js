// Call in installed dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// environment variables
process.env.NODE_ENV = 'development';
// config variables
const config = require('./config/config.js');
// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

//Connect to MongoDB according to the Environment.
mongoose.connect(global.gConfig.databaseUrl, {
  useNewUrlParser: true, useUnifiedTopology: true, user: process.env.user, pass: process.env.pass, keepAlive: true,
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// set up home route
app.get('/', (request, respond) => {
  respond.json(global.gConfig);
});

require('./server/routes/CameraRoutes.routes')(app);  // Require Cameras routes
require('./server/routes/UserRoutes.routes')(app);  // Require User routes

// set up port number
const port = 5035;
app.listen(global.gConfig.node_port, () => {
  console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});
