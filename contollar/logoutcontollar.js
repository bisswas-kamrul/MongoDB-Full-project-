function logoutcontollar(req, res) {
  req.session.destroy((err) => {
    if (err) {
     return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie("auth_session");
    res.json({
      message: "Logout successful",
    });
  });
}
module.exports = logoutcontollar;
