var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
  user: "ditto.website.submission@gmail.com",
  pass: "lbnxmixnyddmqadv",
  // pass: "xerxes1972",
  },
});

contactEmail.verify((error) => {
  if (error) {
  console.log(error);
  } else {
  console.log("Ready to Send");
  }
});

/* POST home page */
router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
  from: name,
  to: "sandyditto47@gmail.com",
  subject: "Contact Form Submission",
  text: " ",
  html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
      if (error) {
          res.json({ status: "ERROR" });
      } else {
          res.json({ status: "Message Sent" });
      }
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sandy Ditto Real Estate' });
});

module.exports = router;


    /* SECONDARY EMAIL */
// service: 'gmail',
// auth: {
// user: "replyno675@gmail.com",
// pass: "kurpcpgaxmuofnyd",
// //pass: "noReply123!",
// },