const List = require("../moddel/Schema");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Emailvirtuals = require("../regex/Emailvirtuals");
const transporter = require("../nodmailerFolder/mailerconfig");

async function SingUpContollar(req, res) {
  const { Firstname, lastname, email, password } = req.body;

  if (!Firstname || !lastname || !email || !password) {
    return res.json({
      Message: "Fill in all the blanks.",
    });
  }
  if (!Emailvirtuals) {
    return res.json({
      Message: "email formet dik ase kina",
    });
  }
  const cheklist = await List.findOne({ email });
  if (cheklist) {
    return res.json({
      message: "This email has already been used.",
    });
  }
  const OTP = crypto.randomInt(100000,999999).toString()
  const expireotpTime = new Date(Date.now() + 5 * 60 * 1000)

  bcrypt.hash(password, 10, async function (err, hash) {
    const EmailPost = new List({
      Firstname: Firstname,
      lastname: lastname,
      email: email,
      password: hash,
      otp:OTP,
      expireotp:expireotpTime,
    });
    await EmailPost.save();
    transporter(email,OTP)
  });
  res.send({
    message: "Signup successful",
  });
}
module.exports = SingUpContollar;
