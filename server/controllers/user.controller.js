const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, Profile } = require("../models/models");
// const { func, function } = require("joi");

const generateJwt = (id) => {
  return jwt.sign({ id }, "~E(/]s@}};8a%|/s)ni5z_Ji+B");
};

async function registration(req, res) {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 4);
    const user = await User.create({
      email,
      password: hashedPassword,
      role,
    });
    const token = generateJwt(user.id);
    user.update({ token: token });
    res.status(200).json({ token, role });
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
  return res
    .status(200)
    .json({ token: token, role: user.role, email: user.email });
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
    const destroyProfiles = await Profile.destroy({ where: { userId: id } });
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
      attributes: ["id", "email", "role", "allProfiles"],
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}

async function getCurrentUser(req, res) {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
      res.status(404).send({ message: "User isn't found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}

const getBirthday = function (arr) {
  let count = 0;
  const nowyear = new Date().getFullYear();
  const nowmonth = new Date().getMonth() + 1; // ____
  const nowday = new Date().getDate();
  arr.map((el) => {
    const birthyear = +el.birthdate.slice(6);
    const birthmonth = +el.birthdate.slice(3, 6);
    const birthday = +el.birthdate.slice(0, 2);
    if (nowyear - birthyear > 18) {
      return (count = count + 1);
    }
    if (nowyear - birthyear === 18) {
      if (nowmonth > birthmonth) {
        return (count = count + 1);
      }
      if (nowmonth === birthmonth) {
        if (nowday >= birthday) {
          return (count = count + 1);
        }
      }
    }
  });
  return count;
};

async function getInfo(req, res) {
  try {
    const usersCount = await User.findAll({
      attributes: ["id"],
    });
    const userProfiles = await Profile.findAll({
      attributes: ["id", "birthdate"],
    });
    const oldProfiles = getBirthday(userProfiles);
    res.status(200).json({
      users: usersCount.length,
      profiles: userProfiles.length,
      oldProfiles: oldProfiles,
    });
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
  getCurrentUser,
  getInfo,
};
