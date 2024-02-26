require("dotenv").config();
const http = require('http')
const app = require('./src/app')
const {connectDB} = require('./src/services/mongo')
const port = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer(){
    await connectDB();
    server.listen(port,(req, res)=>{
        console.log(`Server is listening at PORT: ${port}`);
    })
}

startServer();
