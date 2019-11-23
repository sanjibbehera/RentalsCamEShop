// Call in installed dependencies
const express = require('express');
// set up express app
const app = express();
// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});

// set up port number
const port = 5035;
app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});