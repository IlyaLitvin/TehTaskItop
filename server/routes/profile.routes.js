const Router = require("express");
const router = new Router();
const profileController = require("../controllers/profile.controller");
const authController = require("../controllers/auth.controller");

router.post("/create", authController.authorize, profileController.addProfile);
router.get("", authController.authorize, profileController.getAllProfiles);
router.patch(
  "/update/:id",
  authController.authorize,
  profileController.updateProfile
);
router.delete(
  "/delete/:id",
  authController.authorize,
  profileController.deleteProfile
);

module.exports = router;
