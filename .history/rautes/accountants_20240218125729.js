const express = require('express')
const router = express.Router()

router.get("/", function(req,res){
    const accountants = [
        {
            id:  1,
            name: getISODay,
            age:227,
            work: driver
        },
        {
            id:2,
            name: man,
            age: 38,
            work: janitor
        },
        {
            id:3,
            name:frank
        }
    ]
})

router.post("/create", function(req,res){
    const payload = req.body
    console.log(`payload`, payload)
    res.send('accountant information posted successfully!')
})

router.put('/:id', function(req,res){
    const accountant = req.params.id
    console.log(`accountant`, accountant)
    const payload = req.body
    console.log(`data`, payload)
    res.send(`You have sent massage of the id ${accountant}`) 
    

})

module.exports = router