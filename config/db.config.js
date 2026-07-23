const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_PROD_URL);
        console.log('✅ MONGODB CONNECTED SUCESSFULLY');
    } catch (error) {
        console.log('Mongoose failed to connect    ' + error)
    }
}

module.exports = connectDB