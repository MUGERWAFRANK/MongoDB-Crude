// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
req.
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
