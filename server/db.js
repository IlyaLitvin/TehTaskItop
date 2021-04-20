const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "itop1000", // Название БД
  "postgres", // Пользователь
  "start", // ПАРОЛЬ
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
