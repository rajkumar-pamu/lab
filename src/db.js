import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "extio_learn_db",
  process.env.DB_USER || "az_postgress_user",
  process.env.DB_PASS || "NwQsR@404#123",
  {
    host: process.env.DB_HOST || "192.168.1.99",
    port: process.env.DB_PORT || 54321, 
    dialect: "postgres",
    logging: false,
  }
);
