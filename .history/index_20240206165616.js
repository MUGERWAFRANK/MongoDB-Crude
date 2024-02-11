// app.js
const express = require('express');
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.send('Hello World! Where are you now days!');

});
req


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
