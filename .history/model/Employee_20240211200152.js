const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema({
    firstname: {
        type: String,
        required: tru
    },
    lastname: {
        type: String,
        required: true,
    }
});

module.exports = employeeSchema;