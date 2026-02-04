const express = require('express');
const cetagoryContollar = require('../../contollar/cetagoryContollar');
const cetagoryGETcontollar = require('../../contollar/cetagoryGETcontollar');
const cetagoryRoute = express.Router()
cetagoryRoute.use(express.json());

cetagoryRoute.post('/cetagoryURL',cetagoryContollar )
cetagoryRoute.get('/cetagoryget',cetagoryGETcontollar)

module.exports = cetagoryRoute