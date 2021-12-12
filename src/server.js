const http = require('http');
const PORT = process.env.PORT || 8000;
const app = require('./app');
const mongoose = require('mongoose');
const server = http.createServer(app);

require('dotenv').config()

async function startServer(){
    mongoose 
    .connect('mongodb+srv://new_user32:Z3oSE6iX7LZJeBGP@cluster0.qqysw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
           useNewUrlParser: true,
           useUnifiedTopology: true,
        })   
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
        
    server.listen(PORT,()=>{
        console.log(`Server Listening at PORT ${PORT}`);
    })
}

startServer();


