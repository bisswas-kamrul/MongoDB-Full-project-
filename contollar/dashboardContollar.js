function dashboardContollar(req, res) {
    res.json({
      message: "Welcome to dashboard",
      user: req.session.user,
    });
}
module.exports = dashboardContollar;
