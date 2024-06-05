const http = require('http');
require('dotenv').config();

const port = process.env.PORT;


http.createServer().listen(port, ()=>{
    console.log(`Server is running on port ${8000}`);
});