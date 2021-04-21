const dotenv = require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
const logger = require("morgan");
const models = require("./models/models");
const userRoutes = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use("/api/user", userRoutes);
// app.use("/api/user/profiles", profilesRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
