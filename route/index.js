const express = require('express');
const apiroutere = require('./api'); // apiroutere theke input kora
const router = express.Router()
// router connect
router.use(apiroutere) 
// router connect
module.exports = router