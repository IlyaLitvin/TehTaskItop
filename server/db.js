const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME, // Название БД
  process.env.POSTGRES_USER, // Пользователь
  process.env.POSTGRES_PASSWORD, // ПАРОЛЬ
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
