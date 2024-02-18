const express = require('express')
const router = express.Router()

router.get('/',function(request,response){
    const teachers = {
        data:[
            "James","Peter", "John","Kelly"
        ]

    }
    response.send(teachers)
})

module.exports = roi
