const express = require('express')
const router = express.Router()
// const data = require('../constants/data')

router.get('/', function(req,res){
    const students = data.students
    res.send(
        students
    )
})
router.post('/create', function(req,res){
    const data = req.body //console.log(student details,data)

    res.send(data)
})

module.exports = router