import nodemailer from 'nodemailer';
import nodemailMailgun from 'nodemailer-mailgun-transport';
import { MAILGUN_KEY, MAILGUN_HOST } from '../utils/secrets';

// create reusable transporter object using the default SMTP transport

const auth = {
  auth: {
    api_key: MAILGUN_KEY || '',
    domain: MAILGUN_HOST || '',
  },
};

const transport = nodemailer.createTransport(nodemailMailgun(auth));

export { transport };

// transport.verify().then(() => {
//   console.log('ready for send emails');
// });
