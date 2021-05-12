const dotenv = require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const logger = require("morgan");
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes");

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use("/api/user", userRoutes);
app.use("/api/user/profiles", profileRoutes);

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
