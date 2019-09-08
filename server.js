const express = require('express');
const path = require('path');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
require('dotenv').config()

const server = express();

server.use(express.json());
server.use(helmet());
server.use(express.static(path.join(__dirname, 'client/build')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

server.post('/api/email', async (req, res) => {

  const email = req.body;

  try {
    const info = await sendMail(email);
    res.json({ message: 'email sent', info });

  } catch (error) {
    res.status(500).json({ message: 'failed to send email', error });
  }
})

module.exports = server;

// helpers

function sendMail(info) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASS
    }
  });

  const mailOpts = {
    from: `"${info.name}" <${info.email}>`, // sender address
    to: process.env.RECEIVER_EMAIL, // list of receivers
    subject: 'Contact/Booking Form', // Subject line
    text: info.message, // plain text body
  };


  // send mail with defined transport object
  return transporter.sendMail(mailOpts);
};