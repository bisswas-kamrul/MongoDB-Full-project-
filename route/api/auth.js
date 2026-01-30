const express = require('express');
const SingUpContollar = require('../../contollar/SingUpContollar');
const Logincontollar = require ("../../contollar/Logincontollar");
const OTPcontollar = require('../../contollar/Otpcryptocontrolar');
const ResendOTPcontollar = require('../../contollar/resendOTPcontollar');
const logoutcontollar = require('../../contollar/logoutcontollar');
const dashboardContollar = require('../../contollar/dashBoardcontollar');
const authMedellwer = require('../../medelwearFolder/authMedellwer');
const authrouter = express.Router()
authrouter.use(express.json());

authrouter.post('/signup', SingUpContollar)
authrouter.post('/Login', Logincontollar)
authrouter.post('/OTPverify', OTPcontollar)
authrouter.post('/resend',ResendOTPcontollar)
authrouter.post('/logout',logoutcontollar)
authrouter.post('/dashboard', dashboardContollar)
authrouter.get('/dashboard', authMedellwer)

module.exports = authrouter