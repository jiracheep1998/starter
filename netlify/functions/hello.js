const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, Netlify Functions with Express!' });
});

exports.handler = app;