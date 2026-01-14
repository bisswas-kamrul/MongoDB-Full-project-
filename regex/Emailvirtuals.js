function Emailvirtuals(email) {
 const Emailregex = /^[a-z0-9][\w\.]{m,n}\@\w+?(\.\w+){1,}$/gi
 Emailregex.test(email) //  Email Address right ase  kina ta justifay korrar jonno

 if (!Emailregex.test(email)) {
  return res.json({ message: "Invalid Email" });
} //  tomar email adress dik na thakle sms a bole diba invalid Email
}
module.exports = Emailvirtuals