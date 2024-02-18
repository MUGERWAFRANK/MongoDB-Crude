const express = require('express')
const router = express.Router

router.get("/", function(req,res){
    const students = [
        {
            id: 1,
            name: frank,
            age: 39,
            work:teacher

        },{
            id: 2,
            name: john,
            age:39,
            work:doctor
        },{
            id:3,
            name:musa,
            age:18,
            work
        }]
})
router.post("/create", function(req,res){
    const data = req.body //console.log(student details,data)
    const name = data.name
    res.send(data)
})

module.exports = router