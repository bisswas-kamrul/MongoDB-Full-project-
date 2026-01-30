const bcrypt = require("bcrypt");
const List = require("../moddel/Schema");
async function Logincontollar(req, res) {
  const { email, password } = req.body;
  const sinupUser = await List.findOne({ email });
  if (!sinupUser.verification) {
    return res.json({
      message: "Email error",
    });
  }
  //   if (sinupUser.password !== password) {
  //     return res.json({
  //       message: "password Error",
  //     });
  //   }
  const isMatch = await bcrypt.compare(password, sinupUser.password); //   hash taq newar karone password mach kore nay tay compear kora lage setar jonnu eta newa
  if (!isMatch) {
    return res.json({
      message: "password Error",
    });
  }
  // SESSION CREATE
  req.session.user = {
    id: sinupUser._id,
    email: sinupUser.email,
    name: sinupUser.Firstname,
  };
  // SESSION CREATE
  res.send({
    message: "Login successful",
  });
}
module.exports = Logincontollar;
