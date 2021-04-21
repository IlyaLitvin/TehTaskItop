const Router = require("express");
const router = new Router();
const profileController = require("../controllers/profile.controller");
const authController = require("../controllers/auth.controller");

router.post("/create", profileController.addProfile);
router.patch("/update/:id", profileController.updateProfile);
router.delete("/delete/:id", profileController.deleteProfile);

module.exports = router;
