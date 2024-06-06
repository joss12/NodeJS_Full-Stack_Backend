const http = require('http');
const app = require('./app/app');
require('dotenv').config();

const port = process.env.PORT;


http.createServer(app).listen(port, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});