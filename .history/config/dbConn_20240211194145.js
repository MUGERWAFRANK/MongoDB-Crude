const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.DATABASE_URI,{
        useUnifiedTopology: true,
        useNewUrIParser: true
       });
    }catch(err) {
        console.error(err);
    }
}
 

module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;