const List = require("../moddel/Schema");
const axios = require("axios");
const jwt = require("jsonwebtoken");

// Google Login Controller
async function googleLoginController(req, res) {
  const { token } = req.body; // id_token from frontend

  try {
    if (!token) {
      return res.status(400).json({ message: "Token is missing" });
    }

    // Verify Google ID token
    const googleRes = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    const { email, sub: googleId, name, picture } = googleRes.data; // sub = Google unique ID

    // Check if user already exists
    let user = await List.findOne({ email });
    if (!user) {
      user = new List({
        email,
        googleId,
        name,      // optional, store name
        avatar: picture // optional, store profile picture
      });
      await user.save();
    }

    // Generate JWT token for session
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send JWT as cookie
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only https in production
      sameSite: "lax",
    });

    // Send response
    res.json({
      message: "Google login successful",
      token: jwtToken,
      user: {
        email: user.email,
        name: user.name,
        avatar: user.avatar
      }
    });

  } catch (err) {
    console.error("Google login error:", err.message);
    res.status(400).json({ message: "Google login failed" });
  }
}

module.exports = googleLoginController;