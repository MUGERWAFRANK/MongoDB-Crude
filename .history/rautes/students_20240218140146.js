const express = require('express')
const router = express.Router

router.get("/", function(req,res){
    const student = data.accountants
    res.send({
        accountant
    })
})
router.post("/create", function(req,res){
    const data = req.body //console.log(student details,data)
    const name = data.name
    res.send(data)
})

module.exports = router