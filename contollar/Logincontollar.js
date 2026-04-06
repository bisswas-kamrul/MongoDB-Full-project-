const bcrypt = require("bcrypt");
const List = require("../moddel/Schema");

async function Logincontollar(req, res) {
  const { email, password } = req.body;

  const sinupUser = await List.findOne({ email });

  // Check if user exists
  if (!sinupUser) {
    return res.status(400).json({ message: "Email not found" });
  }

  // Check if email is verified
  if (!sinupUser.verification) {
    return res.status(400).json({ message: "Email not verified" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, sinupUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Password incorrect" });
  }

  // Create session
  req.session.user = {
    id: sinupUser._id,
    role: sinupUser.role,
    email: sinupUser.email,
    name: sinupUser.Firstname,
  };

  res.json({ message: "Login successful" });
}

module.exports = Logincontollar;