const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express on Netlify!');
});

// Export Express app as a serverless function
module.exports.handler = serverless(app);