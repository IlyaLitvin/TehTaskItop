const Router = require("express");
const router = new Router();
const profileController = require("../controllers/profile.controller");
const authController = require("../controllers/auth.controller");

router.post("/create", authController.authorize, profileController.addProfile);
router.get(
  "/profiles",
  authController.authorize,
  profileController.getAllPrfoles
);
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
