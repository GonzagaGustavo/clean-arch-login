import { DataTypes, Sequelize } from "sequelize";

const orm = new Sequelize(process.env.DATABASE_URL!);

export default orm;
