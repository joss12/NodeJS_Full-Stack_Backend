const express = require('express');
const router = express.Router();

// routes
const bookRoute = require('./book.route');
const userRoute = require('./user.route');


const routesIndex = [
    {
        path:'/users',
        route:userRoute
    },
    {
        path:'/books',
        route:bookRoute
    }
]

routesIndex.forEach((route)=>{
    router.use(route.path,route.route)
})

module.exports = router
