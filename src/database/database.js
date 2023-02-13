import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const DBName = process.env.DB_NAME;
const DBUser = process.env.DB_USER;
const DBHost = process.env.DB_HOST;

const DBPassword = process.env.DB_PASSWORD;
// const DBPort = process.env.DB_PORT;
const Dialect = process.env.DIALECT;

export const sequelize = new Sequelize(
	"wordpress",
	"wordpressuser",
	"jRR&gj8KD$T5V@aRGB9",
	{
		host: "195.201.225.161",
		dialect: "mysql",
	}
);
