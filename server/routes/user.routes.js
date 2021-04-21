const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

router.post(
  "/registration",
  userController.validationUser,
  userController.registration
);
router.post("/login", userController.validationUser, userController.login);
router.patch("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);
// router.get("/auth", authMiddleware, userController.check);

module.exports = router;
