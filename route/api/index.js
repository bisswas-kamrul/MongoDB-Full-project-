const express = require('express'); 
const authrouter = require('./auth'); // authJs theke input kora
const shoprouter = require('./shop'); // shopJs theke input kora
const cetagoryRoute = require('./cetagory');
const apiroutere = express.Router()

// router connect
apiroutere.use("/" ,authrouter) 
apiroutere.use("/" ,shoprouter) 
apiroutere.use("/" ,cetagoryRoute) 
// router connect

module.exports = apiroutere // onno page connect korrar jonno exprot kora lage