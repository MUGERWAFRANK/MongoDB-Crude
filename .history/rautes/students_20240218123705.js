const express = require('express')
const router = express.Router


app.post("/students/create", function(req,res){
    const data = req.body //console.log(student details,data)

    const name = data.name
    console.log(name)
    res.send(data)
})