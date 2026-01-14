const List = require("../moddel/Schema");
const bcrypt = require("bcrypt");
const Emailvirtuals = require("../regex/Emailvirtuals");
const transporter = require("../nodmailerFolder/mailerconfig");

async function SingUpContollar(req, res) {
  const { Firstname, lastname, email, password } = req.body;

  if (!Firstname || !lastname || !email || !password) {
    return res.json({
      Message: "Fill in all the blanks.",
    });
  }
  if (!Emailvirtuals) {
    return res.json({
      Message: "email formet dik ase kina",
    });
  }
  const cheklist = await List.findOne({ email });
  if (cheklist) {
    return res.json({
      message: "This email has already been used.",
    });
  }
  bcrypt.hash(password, 10, async function (err, hash) {
    const EmailPost = new List({
      Firstname: Firstname,
      lastname: lastname,
      email: email,
      password: hash,
    });
    await EmailPost.save();
    transporter()
  });
  res.send({
    message: "Signup successful",
  });
}
module.exports = SingUpContollar;
