const jwt = require("jsonwebtoken");
const { User } = require("../db");

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
    const { id, email } = payload;
    const user = await User.findById(email);
    if (!user && user.id === id) {
      return res.status(401).send({
        message: "Not authorized",
      });
    }
    req.user = user;
    req.tokenId = requestedToken._id;
    next();
  } catch (error) {
    return res.status(401).send(error.message);
  }
}

module.exports = { authorize };
