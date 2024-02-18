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

// const express = require('express')

// const app = express()
// app.use(express.json())

// const port = 3009

// app.get('/', (req, res) => {
//      res.send('Hello World! Where are you now days!');

// app.listen(port, function onStart() {
//     console.log(The API is running on port ${port})
// })

// const { format} = require(date-fns)

// //console.log(format(new Date(),'yyyymmdd\tHH:mm:ss' ))



// const express = require('express');

// const app = express();
// app.use(express.json());


// const port = 3000;

// // Simple GET request
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// // Route parameters
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });

// // Query parameters
// app.get('/search', (req, res) => {
//     const query = req.query.q;
//     res.send(`Search query: ${query}`);
// });

// // Handling POST requests
// app.post('/users', (req, res) => {
//     const userData = req.body;
//     // Assuming JSON data is sent in the request body

//     res.json(userData);
// });

// // Redirecting
// app.get('/redirect', (req, res) => {
//     res.redirect('/new-location');
// });

// // Serving static files
// app.use(express.static('public'));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

// // Handling 404 Not Found
// app.use((req, res, next) => {
//     res.status(404).send('404 - Not Found');
    
// });

// console.log(math.add(2,5))
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });


const express = require('express')

const bodyparser = require('body-parser')

const app = express()

app.use(express.json()) //accepting json data

app.use(bodyparser.urlencoded({
    extended:true,
    parameterLimit:100000,
    limit:"100mb"

}))
const port  =3007

app.listen(port,function(){
    console.log(`The API service is listening on port ${port} `)
})

app.get('/teachers',function(request,response){
    const teachers = {
        data:[
            "James","Peter", "John","Kelly"
        ]

    }
    response.send(teachers)
})

app.post("/teachers", function(req, res) {
    const payload = req.body;
    console.log("Name:", payload.name); // Using string literal as key
    console.log("Age:", payload.age); // Using string literal as key
    console.log("Professional:", payload.Professional); // Using string literal as key
    console.log("Date_of_birth:", payload.Date_of_birth); // Using string literal as key
    res.send(payload);
});

app.post("/students/create", function(req,res){
    const data = req.body //console.log(student details,data)

    const name = data.name
    console.log(name)
    res.send(data)
})
app.post("/students/create", function(req,res){
    const p
})