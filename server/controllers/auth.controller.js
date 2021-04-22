const jwt = require("jsonwebtoken");
const { User } = require("../models/models");

async function authorize(req, res, next) {
  const authorizationHeader = req.get("Authorization");
  if (!authorizationHeader) {
    return res.status(401).send({
      message: "Not authorized",
    });
  }
  const userToken = authorizationHeader.replace("Bearer ", "");
  try {
    const payload = await jwt.verify(userToken, "~E(/]s@}};8a%|/s)ni5z_Ji+B");
    const { id } = payload;
    const user = await User.findOne({ where: { id: id } });
    if (!user || user.token === null) {
      return res.status(401).send({
        message: "Not authorized",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send(error.message);
  }
}

async function checkRole(req, res, next) {
  try {
    const { role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({ message: "You have not rights" });
    }
    next();
  } catch (error) {
    return res.status(401).send(error.message);
  }
}

module.exports = { authorize, checkRole };
