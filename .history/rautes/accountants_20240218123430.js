const express = require('express')
const router = express.Router()

app.post("/accountants/create", function(req,res){
    const payload = req.body
    console.log(`payload`, payload)
    res.send('accountant information posted successfully!')
})

app.put('/accountants/:id', function(req,res){
    const accountant = req.params.id
    console.log(`accountant`, accountant)
    const payload = req.body
    console.log(`data`, payload)
    res.send(`You have sent massage of the id ${accountant}`) 
    

})