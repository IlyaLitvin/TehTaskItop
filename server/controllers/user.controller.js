const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/models");

const generateJwt = (id) => {
  return jwt.sign({ id }, "~E(/]s@}};8a%|/s)ni5z_Ji+B");
};

async function registration(req, res) {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 4);
    const user = await User.create({
      email,
      role,
      password: hashedPassword,
    });
    const token = generateJwt(user.id);
    user.update({ token: token });
    res.status(200).json({ token });
  } catch (error) {
    res.status(409).send("Email in use");
    console.log(error.message);
  }
}

function validationUser(req, res, next) {
  const validationRules = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().required(),
    role: Joi.string(),
  });
  const validationResult = validationRules.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.message);
  }
  next();
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email: email },
  });
  if (!user) {
    return res.status(401).send("Email or password is wrong");
  }
  const paswordValid = await bcrypt.compare(password, user.password);
  if (!paswordValid) {
    return res.status(401).send("Email or password is wrong");
  }
  const token = generateJwt(user.id);
  user.update({ token: token });
  return res.status(201).json({ token });
}

async function updateUser(req, res) {
  try {
    const { email, role } = req.body;
    const {
      params: { id },
    } = req;
    const user = await User.findOne({ where: { id: id } });
    const newEmail = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    if (newEmail) {
      return res.status(404).send({ message: "Email is busy" });
    }
    user.update({ email, role });
    return res.status(200).send({ message: "User is updated" });
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    const {
      params: { id },
    } = req;
    const deletedUser = await User.destroy({ where: { id: id } });
    if (!deletedUser) {
      return res.status(400).send("User not found");
    }
    res.status(200).json({ message: "User was deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function userLogout(req, res) {
  try {
    const { email } = req.user;
    const user = await User.findOne({ where: { email: email } });
    user.update({ token: null });
    res.status(200).send({ message: "logget out" });
  } catch (error) {
    console.log(error);
  }
}

async function getAllUsers(req, res) {
  try {
    const user = await User.findAll({
      attributes: ["id", "email", "role"],
    });
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
}

async function getInfo(req, res) {
  try {
    const user = await User.findAndCountAll({
      attributes: ["id"],
    });
    res.status(200).json({ user: user.count });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  registration,
  validationUser,
  login,
  updateUser,
  deleteUser,
  userLogout,
  getAllUsers,
  getInfo,
};
