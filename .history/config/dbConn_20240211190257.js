const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process)
    }catch(err) {
        console.log(err);
    }
}