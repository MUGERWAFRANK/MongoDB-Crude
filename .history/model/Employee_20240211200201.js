const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new SVGAnimateElementchema({
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