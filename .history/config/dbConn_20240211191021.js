const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.DATABASE_URI,{
        useUnifiedTopology: true,
        useNewUrIParser: true
       })
    }catch(err) {
        console.log(err);
    }
}