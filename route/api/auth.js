const express = require('express');
const SingUpContollar = require('../../contollar/SingUpContollar');
const Logincontollar = require ("../../contollar/Logincontollar");
const OTPcontollar = require('../../contollar/Otpcryptocontrolar');
const ResendOTPcontollar = require('../../contollar/resendOTPcontollar');
const logoutcontollar = require('../../contollar/logoutcontollar');
const dashboardContollar = require('../../contollar/dashBoardcontollar');
const authMedellwer = require('../../medelwearFolder/authMedellwer');
const ForgotPasswordContollar = require('../../contollar/ForgotPasswordContollar');
const ResetPasswordContollar = require('../../contollar/ResetPasswordContollar');
const googleloginContollar = require('../../contollar/googleloginContollar');
const UserContollar = require('../../contollar/Usercontollar');
const deletUserContollar = require('../../contollar/deletUserContollar');
const protect = require('../../medelwearFolder/protect');
const authrouter = express.Router()
authrouter.use(express.json());

authrouter.post('/signup', SingUpContollar)
authrouter.post('/Login', Logincontollar)
authrouter.post('/OTPverify', OTPcontollar)
authrouter.post('/resend',ResendOTPcontollar)
authrouter.post('/logout',logoutcontollar)
authrouter.post('/dashboard', dashboardContollar)
authrouter.post('/ForgotPassword', ForgotPasswordContollar)
authrouter.post('/deletUser/:id', deletUserContollar)
authrouter.post('/ResetPassword/:token', ResetPasswordContollar)
authrouter.post('/googlelogin', googleloginContollar)
authrouter.get('/Useronely', authMedellwer)
authrouter.get('/User', UserContollar)
// protect-route
authrouter.get("/ProtectRoute", protect, (req, res) => {
  res.json({
    user: req.user,
  });
});
module.exports = authrouter