import { Email } from "../models/email.js";
import dotenv from "dotenv";
import { transporter } from "../../config/mailer.js";
import { endpointResponse } from "../../helper/success.js";
// const { endpointResponse } = require("../../helper/success.js");
import nodemailer from "nodemailer";
dotenv.config();

export async function getProjects(req, res) {
	try {
		const projects = await Email.findAll({
			atributes: ["id", "name", "priority", "description", "deliverydate"],
		});
		res.json(projects);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
}

function sendConfirmationEmail(transporter, email) {
	return new Promise((resolve, reject) => {
		transporter.sendMail(
			{
				from: process.env.EMAIL,
				to: email,
				subject: "Confirmation Email",
				text: "Thank you for registering with us!",
				html: "<p>Thank you for registering with us!</p>",
			},
			(error, info) => {
				if (error) {
					reject(error);
				} else {
					resolve(info);
				}
			}
		);
	});
}

export async function createProject(req, res) {
	const { name, lastName, email, country } = req.body;
	try {
		let newProject = await Email.create(
			{
				name,
				lastName,
				email,
				country,
			},
			{
				fields: ["name", "lastName", "email", "country"],
			}
		);
		// Ejemplo de llamada a la función enviarCorreoConfirmacion
		sendConfirmationEmail(transporter, email)
			.then(() => {
				console.log("Email sent to:", email);

				endpointResponse({
					res,
					message: "Email sent to: " + email,
					body: newProject,
				});
			})
			.catch((error) => {
				console.error(error);
				res.status(500).json({
					message: error.message,
				});
			});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
}
