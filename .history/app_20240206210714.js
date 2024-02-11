// const express = require('express');

// const app = express();
// app.use(express.json());

// const port_number = 3008;
// app.listen(port_number, function() {
//     console.log(`The api service is running on port ${port_number}`);
// });

// // Define route for '/doctors'
// app.get('/doctors', function(request, response) {
//     response.send({
//         "doctors": ["Julius", "John"]
//     });
// });


const express = require('express')

const app = express()
app.use(express.json())

const port = 3009

app.listen(port, function onStart() {
    console.log(The API is running on port ${port})
})

// routes
app.get('/', function(request, response){
    response.send("The API is running very well")
})

app.get('/students', function(request, response){
    console.log(Your are requesting for a list of students);
    const students = {
        names: ["Derrick", "Frank", "Abertson", "Titus"]
    }
    response.send(students)
})