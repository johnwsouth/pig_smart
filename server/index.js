
require('dotenv/config');
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(PORT, () => {
  console.log("App listening closely (node)");
})
