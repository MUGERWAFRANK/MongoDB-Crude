// // app.js
// const express = require('express');
// const app = express();
// const port = 3009;

// app.get('/', (req, res) => {
//   res.send('Hello World! Where are you now days!');

// });
// app.get('/hello/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`Hello, ${name}!`);
// });



// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

const express = require('express')

const app = express()
app.use(express.json())

const port = 3009

app.listen(port, function onStart() => {
    console.log(`The API is running on port ${port}`)
})
