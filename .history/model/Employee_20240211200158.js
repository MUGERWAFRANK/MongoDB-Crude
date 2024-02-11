const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new chema({
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true,
    }
});

module.exports = employeeSchema;