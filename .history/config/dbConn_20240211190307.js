const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.DATA)
    }catch(err) {
        console.log(err);
    }
}