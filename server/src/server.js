require("dotenv").config();
const https = require('https')
const app = require('./app')
const {connectDB} = require('./services/mongo')
const port = process.env.PORT || 3000;
const server = https.createServer(app);

async function startServer(){
    await connectDB();
    server.listen(port,(req, res)=>{
        console.log(`Server is listening at PORT: ${port}`);
    })
}

startServer();
