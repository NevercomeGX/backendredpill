import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { transporter } from "../config/mailer.js";
dotenv.config();

const app = express();

// Import routes
import emailRouter from "./routes/emails.routes.js";
app.use(cors());

app.options("*", cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/emails", emailRouter);

export default app;
