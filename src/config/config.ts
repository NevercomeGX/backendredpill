import nodemailer from 'nodemailer';
import { EMAILPASSWORD, EMAILHOST, EMAIL } from '../utils/secrets';
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: EMAILHOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  requireTLS: true,
  auth: {
    user: EMAIL, // generated ethereal user
    pass: EMAILPASSWORD, // generated ethereal password
  },
});

export { transporter };

transporter.verify().then(() => {
  console.log('ready for send emails');
});
