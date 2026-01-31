const express = require('express');
const cetagoryContollar = require('../../contollar/cetagoryContollar');
const cetagoryGET = require('../../contollar/cetagoryGET');
const cetagoryRoute = express.Router()
cetagoryRoute.use(express.json());

cetagoryRoute.post('/cetagoryURL',cetagoryContollar )
cetagoryRoute.get('/cetagoryget',cetagoryGET)

module.exports = cetagoryRoute