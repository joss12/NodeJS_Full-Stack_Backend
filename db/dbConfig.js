require('dotenv').config();
const mongoose = require('mongoose')

const connect = async () =>{
    await mongoose.connect(process.env.mongo).then(()=>{
        console.log('->Database  Successfully Connected');
    }).catch((err) => {
        console.log('->Database Connection Failed', err.stack)
    })
};

module.exports = {
    connect
}