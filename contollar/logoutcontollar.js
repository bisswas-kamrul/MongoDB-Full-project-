function logoutcontollar(req, res) {
  req.session.destroy((err) => {
    if (err) {
      res.json({
        message: "Unable to LogOut",
      });
    }
    res.clearCookie("auth_session");
    res.json({
      message: "Logout successful",
    });
  });
}
module.exports = logoutcontollar;
