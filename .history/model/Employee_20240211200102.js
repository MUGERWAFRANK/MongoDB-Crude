const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema({
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: string,
        required: true,
    }
});

module.