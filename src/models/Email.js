import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Email = sequelize.define("emails", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	lastName: {
		type: DataTypes.STRING,
	},
	email: {
		type: DataTypes.STRING,
	},
	country: {
		type: DataTypes.STRING,
	},
});
