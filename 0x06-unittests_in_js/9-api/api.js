const express = require('express');
const app = express();

const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New regex-based route for cart
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app for testing

