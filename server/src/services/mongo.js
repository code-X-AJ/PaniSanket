const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI 

async function connectDB(){
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Mango is connected!!!");
    }catch(err){
        console.error(err);
    }
}

module.exports = {connectDB}
