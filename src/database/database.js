import Sequelize from "sequelize";

export const sequelize = new Sequelize("escuelaredpill", "root", "root", {
	host: "localhost",
	dialect: "mysql",
});
