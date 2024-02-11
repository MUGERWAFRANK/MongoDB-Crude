const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.DATABASE_URI,{
        useunifiedTopolog
       })
    }catch(err) {
        console.log(err);
    }
}