const express = require('express')
const router = express.Router()

app.get('/teachers',function(request,response){
    const teachers = {
        data:[
            "James","Peter", "John","Kelly"
        ]

    }
    response.send(teachers)
})
