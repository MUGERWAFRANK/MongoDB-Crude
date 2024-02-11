const mongoose = require('mongoose');
const chema = mongoose.Schema;

const employeeSchema = new Schema({
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