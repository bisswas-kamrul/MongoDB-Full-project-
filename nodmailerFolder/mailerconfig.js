const nodemailer = require("nodemailer");

async function transporter () {
    const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "kamrulnahid01710294440@gmail.com",
    pass: "asdaewwlvajpeczj",
  },
});

const info = await transporter.sendMail({
    from: '"Learning-Mern-2407" <kamrulnahid01710294440@gmail.com>',
    to: "bisswaskamruldev@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // Plain-text version of the message
    html: "<b>Success?</b>", // HTML version of the message
  });

}
module.exports = transporter