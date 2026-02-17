const express = require('express'); 
const authrouter = require('./auth'); // authJs theke input kora
const cetagoryRoute = require('./cetagory');
const ProductRoute = require ('./product')
const apiroutere = express.Router()

// router connect
apiroutere.use("/" ,authrouter) 
apiroutere.use("/" ,cetagoryRoute) 
apiroutere.use("/" ,ProductRoute) 
// router connect

module.exports = apiroutere // onno page connect korrar jonno exprot kora lage