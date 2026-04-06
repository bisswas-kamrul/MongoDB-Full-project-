const List = require("../moddel/Schema");

async function OTPcontollar(req, res) {
  try {
    const { email, otp } = req.body;

    const userEmail = await List.findOne({ email, otp });

    if (!userEmail) {
      return res.status(400).json({
        message: "Invalid OTP or Email",
      });
    }

    if (userEmail.expireotp < Date.now()) {
      return res.status(400).json({
        message: "OTP Expired",
      });
    }

    userEmail.verification = true;
    userEmail.otp = undefined;
    userEmail.expireotp = undefined;

    await userEmail.save();

    return res.status(200).json({
      message: "Email Verification Done",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
}

module.exports = OTPcontollar;