import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false, // true for 465, false for other ports
	requireTLS: true,
	auth: {
		user: process.env.EMAIL, // generated ethereal user
		pass: process.env.EMAILPASSWORD, // generated ethereal password
	},
});

export { transporter };

transporter.verify().then(() => {
	console.log("ready for send emails");
});
