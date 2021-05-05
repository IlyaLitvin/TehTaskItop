const { User, Profile } = require("../models/models");
// const { function } = require("joi");

async function addProfile(req, res) {
  try {
    const { name, gender, birthdate, city } = req.body;
    const { id } = req.user;
    const profile = await Profile.create({
      name,
      gender,
      birthdate,
      city,
      userId: id,
    });
    const user = await User.findOne({ where: { id: id } });
    user.update({ allProfiles: user.allProfiles + 1 });
    res.status(200).json({ profile });
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function getAllProfiles(req, res) {
  try {
    const {
      params: { id },
    } = req;
    // if (+id !== req.user.id) {
    //   if (req.user.role !== "ADMIN") {
    //     return res.status(401).send({ message: "You haven't rights" });
    //   }
    // }
    const getProfiles = await Profile.findAll({
      attributes: ["id", "name", "gender", "birthdate", "city", "userId"],
    });
    const profilesFilteredById = getProfiles.filter((el) => el.userId == id);
    res.status(200).json(profilesFilteredById);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

function check(id, user) {
  if (+id === user.id) {
    return id;
  } else if (user.role === "ADMIN") {
    return id;
  } else {
    return null;
  }
}

async function updateProfile(req, res) {
  try {
    const { name, gender, birthdate, city } = req.body;
    const {
      params: { id },
    } = req;
    const profile = await Profile.findOne({ where: { id: id } });
    if (!profile) {
      return res.status(404).send({ message: "Profile not found" });
    }
    const checkId = check(profile.userId, req.user);
    if (checkId) {
      profile.update({ name, gender, birthdate, city });
      return res.status(200).json({ profile });
    }
    res.status(401).send({ message: "Haven't rights" });
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function deleteProfile(req, res) {
  try {
    const {
      params: { id },
    } = req;
    const profile = await Profile.findOne({ where: { id: id } });
    if (!profile) {
      return res.status(404).send({ message: "Profile not found" });
    }
    const checkId = check(profile.userId, req.user);
    if (checkId) {
      const deletedProfile = await Profile.destroy({ where: { id: id } });
      const user = await User.findOne({ where: { id: profile.userId } });
      user.update({ allProfiles: user.allProfiles - 1 });
      return res.status(200).json({ message: "Profile was deleted" });
    }
    return res.status(401).send({ message: "You haven't rights" });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  addProfile,
  getAllProfiles,
  updateProfile,
  deleteProfile,
};
