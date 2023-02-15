import { EMAIL } from '../utils/secrets';
import verifyEmail from '../templates/verifyEmailTemplate';

interface EmailInfo {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

function sendConfirmationEmail(
  transporter: any,
  lastName: string,
  email: string,
  name: string
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const otp = name;
    const emailTemplate = verifyEmail(otp);
    transporter.sendMail(
      {
        from: EMAIL,
        to: email,
        subject: 'Confirmation Email',
        text: emailTemplate.text,
        html: emailTemplate.html,
      } as EmailInfo,
      (error: any, info: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      }
    );
  });
}

export { sendConfirmationEmail };
