const List = require("../moddel/Schema");
const bcrypt = require("bcrypt");
async function ResetPasswordContollar(req, res) {
  try {
    const { newPassword } = req.body;
    const { token } = req.params;
    if (!newPassword)
      return res.status(400).json({ message: "Password required" });
    // Find user by token and check expiry
    const user = await List.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    // Update password and clear token
    user.resetToken = undefined; // token invalidate
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
module.exports = ResetPasswordContollar;
