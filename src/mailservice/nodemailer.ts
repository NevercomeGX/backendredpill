import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import Handlebars from 'handlebars';
import { fstat } from 'fs';
import path from 'path';
import verifyEmail from '../templates/verifyEmailTemplate';

const emailTemplateSource = verifyEmail;

const mailgunAuth = {
  auth: {
    api_key: 'key-e615834c91ae89a64f979d239c2fa8ed',
    domain: 'https://api.mailgun.net/v3/mail.escuelaredpill.com/messages/',
  },
};

const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

// const template = Handlebars.compile(emailTemplateSource);

// const htmlToSend = template({ message: 'Hello!' });

const mailOptions = {
  from: 'myemail@example.com',
  to: 'escuelaredpill@gmail.com',
  subject: 'EMAIL SUBJECT LINE',
  html: '<p>something</p>',
};

smtpTransport.sendMail(mailOptions);

function sendConfirmationEmail() {}

export { sendConfirmationEmail };
