import { Email } from "../models/Email.js";
import dotenv from "dotenv";
import { transporter } from "../../config/mailer.js";
import { endpointResponse } from "../../helper/success.js";
// const { endpointResponse } = require("../../helper/success.js");
import nodemailer from "nodemailer";
dotenv.config();

export async function getProjects(req, res) {
	try {
		const projects = await Email.findAll({
			atributes: ["id", "name", "lastName", "email", "country"],
		});
		res.json(projects);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
}

function sendConfirmationEmail(transporter, email, name) {
	return new Promise((resolve, reject) => {
		transporter.sendMail(
			{
				from: process.env.EMAIL,
				to: email,
				subject: "Confirmation Email",
				text: "Thank you for registering with us!",
				html:
					`<div style="text-align:center ;">
				<h1 style="">Escuela <span style="text-color: #c70039"> Red Pill</span> </h1>
				<div style="text-align: left;">
				<p>Hello ` +
					name +
					`,</p>
				<p>Has recibido este mensaje porque te suscribiste al ABC de la Comunicacion. Confirme su suscripción para recibir nuestros correos electrónicos:</p>
				</div>
				<br>
				<a href="https://alpha.drjuanlopez.com/confirmacion" style="display: inline-block; background-color: #c70039; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Confirmar suscripción</a>
				<br>
				<div style="text-align: left;">
				<p>Gracias</p>
				<a>https://drjuanlopez.com</a>
				</div>
				
			  </div>
				`,
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
		sendConfirmationEmail(transporter, email, name)
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
