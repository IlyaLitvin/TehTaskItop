const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { User } = require("../models/models");

const generateJwt = (id, email) => {
  return jwt.sign({ id, email }, "~E(/]s@}};8a%|/s)ni5z_Ji+B", {
    expiresIn: "12h",
  });
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
    const token = generateJwt(user.id, user.email);
    res.status(201).json({ token });
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
    email,
  });
  if (!user) {
    return res.status(401).send("Email or password is wrong");
  }
  const paswordValid = await bcrypt.compare(password, user.password);
  if (!paswordValid) {
    return res.status(401).send("Email or password is wrong");
  }
  const token = generateJwt(user.id, user.email);
  return res.status(201).json({ token });
}

async function updateUser(req, res) {
  try {
    const { id, email, role } = req.body;
    const user = await User.findOne({ id });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    user.update({ email: email, role: role });
    return res.status(200).send({ message: "User is updated" });
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteUser(req, res) {}

module.exports = { registration, validationUser, login, updateUser };
