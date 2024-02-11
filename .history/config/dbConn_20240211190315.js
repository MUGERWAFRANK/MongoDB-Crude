const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.DATABASE_)
    }catch(err) {
        console.log(err);
    }
}