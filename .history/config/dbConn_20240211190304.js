const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.)
    }catch(err) {
        console.log(err);
    }
}