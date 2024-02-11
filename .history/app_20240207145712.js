// const express = require('express');

// const app = express();
 app.use(express.json());

 const port_number = 3008;
 app.listen(port_number, function() {
     console.log(`The api service is running on port ${port_number}`);
 });

// // Define route for '/doctors'
 app.get('/doctors', function(request, response) {
     response.send({
         "doctors": ["Julius", "John"]
     });
 });

