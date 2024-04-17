const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "moncookapp@gmail.com",
    pass: "qzgc vnaj ysvb mhnz",
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendEmail = async(req, res) => {
  const {email, message} = req.body;
  var mailOptions = {
    from: 'moncookapp@gmail.com',
    to: email,
    subject: 'Password reset code',
    text: message
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent !");
    };
  });
}

module.exports = {sendEmail}