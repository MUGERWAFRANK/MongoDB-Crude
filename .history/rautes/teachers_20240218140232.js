const express = require('express')
const router = express.Router()

router.get('/',function(request,response){
    const teacher = data.
    response.send({
        teacher
    })
})
router.post("/teachers", function(req, res) {
    const payload = req.body;
    console.log("Name:", payload.name); // Using string literal as key
    console.log("Age:", payload.age); // Using string literal as key
    console.log("Professional:", payload.Professional); // Using string literal as key
    console.log("Date_of_birth:", payload.Date_of_birth); // Using string literal as key
    res.send(payload);
});

module.exports = router
