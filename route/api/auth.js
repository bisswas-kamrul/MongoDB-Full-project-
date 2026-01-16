const express = require('express');
const SingUpContollar = require('../../contollar/SingUpContollar');
const Logincontollar = require ("../../contollar/Logincontollar");
const OTPcontollar = require('../../contollar/Otpcryptocontrolar');
const authrouter = express.Router()
authrouter.use(express.json());

authrouter.post('/signup', SingUpContollar)
authrouter.post('/Login', Logincontollar)
authrouter.post('/OTPverify', OTPcontollar)

module.exports = authrouter