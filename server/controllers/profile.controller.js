const { Profile } = require("../models/models");

async function addProfile(req, res) {
  try {
    const { name, gender, birthdate, city } = req.body;
    const profile = await Profile.create({
      name,
      gender,
      birthdate,
      city,
    });
    res.status(200).json({ profile });
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function updateProfile(req, res) {
  try {
    const { name, gender, birthdate, city } = req.body;
    const {
      params: { id },
    } = req;
    const profile = await Profile.findOne({ where: { id: id } });
    console.log(profile);
    if (!profile) {
      return res.status(404).send({ message: "Profile not found" });
    }
    profile.update({ name, gender, birthdate, city });
    return res.status(200).json({ profile });
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function deleteProfile(req, res) {
  try {
    const {
      params: { id },
    } = req;
    const deletedProfile = await Profile.destroy({ where: { id: id } });
    if (!deletedProfile) {
      return res.status(400).send("Profile not found");
    }
    res.status(200).json({ message: "Profile was deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = { addProfile, updateProfile, deleteProfile };
