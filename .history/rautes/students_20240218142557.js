const express = require('express')
const router = express.Router

router.get(/", function(req,res){
    const student = data.students
    res.send({
        student
    })
})
router.post("/create", function(req,res){
    const data = req.body //console.log(student details,data)

    res.send(data)
})

module.exports = router