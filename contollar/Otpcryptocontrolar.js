const List = require("../moddel/Schema");
async function OTPcontollar(req, res) {
  const { email, otp } = req.body;
  const userEmail = await List.findOne({ email });
  if (!userEmail) {
    return res.json({
      message: "otpUser is not found",
    });
  }

  if (userEmail.otp !== otp || userEmail.expireotp < Date.now()) {
    return res.json({
      message: "invalied otp",
    });
  }
  userEmail.verification = true;
  userEmail.otp = undefined;
  userEmail.expireotp = undefined;

  await userEmail.save();
  res.send({
    message: "Email Verification Done",
  });
}
module.exports = OTPcontollar;

