const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.DATABASE_URI,{
        useUnifiedTopology: true,
        useNew: true
       })
    }catch(err) {
        console.error(err);
    }
}
 

module.exports = connectDB;