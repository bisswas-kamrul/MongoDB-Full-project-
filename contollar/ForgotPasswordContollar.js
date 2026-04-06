const List = require("../moddel/Schema");
const crypto = require("crypto");

async function ForgotPasswordContollar(req, res) {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    // 1. Find user (case-insensitive)
    const user = await List.findOne({email: email.toLowerCase()});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Generate token
    const token = crypto.randomBytes(32).toString("hex");

    // 3. Save token & expiry to user document (recommended over session)
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000; //1 hour
    await user.save();
    // // 3. Save token in session
    req.session.resetToken = token;
    req.session.resetUserId = user._id;
    // 4. Reset link
    const resetLink = `http://localhost:5173/ResetPassword/${token}`;
    res.status(200).json({ message: "Reset link sent to console", 
  token: token  });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = ForgotPasswordContollar;
