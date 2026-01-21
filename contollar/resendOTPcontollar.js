const List = require("../moddel/Schema");
const crypto = require("crypto");
const transporter = require("../nodmailerFolder/mailerconfig");

async function ResendOTPcontollar(req, res) {
  const { email } = req.body;

  // singup ar email ase kina 
  if (!email) {
    return res.json({
      message: "Email is required",
    });
  }

  //  singup user ase kina chek kore kuje ber kora
  const SingUpuser = await List.findOne({ email });

  if (!SingUpuser) {
    return res.json({
      message: "User not found",
    });
  }

  //  singup email already verification kora na
  if (SingUpuser.verification) {
    return res.json({
      message: "Email already verified",
    });
  }

  //  new OTP creact kora
  const newOTP = crypto.randomInt(100000, 999999).toString();
  const newExpireTime = new Date(Date.now() + 5 * 60 * 1000); // time set kora  5 minite

  // DB Database update
  SingUpuser.otp = newOTP;
  SingUpuser.expireotp = newExpireTime;
  await SingUpuser.save();

  //  Email patano nodemailer e 
  transporter(email, newOTP);

  res.send({
    message: "OTP resent successfully",
  });
}

module.exports = ResendOTPcontollar;
