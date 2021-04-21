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
router.post("/logout", authController.authorize, userController.userLogout);
router.patch(
  "/update/:id",
  authController.authorize,
  authController.checkRole,
  userController.updateUser
);
router.delete(
  "/delete/:id",
  authController.authorize,
  authController.checkRole,
  userController.deleteUser
);
router.get(
  "/users",
  authController.authorize,
  authController.checkRole,
  userController.getAllUsers
);
router.get(
  "/dashboard",
  authController.authorize,
  authController.checkRole,
  userController.getInfo
);

module.exports = router;
