const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.DATABASE_URI,{
        useunified
       })
    }catch(err) {
        console.log(err);
    }
}