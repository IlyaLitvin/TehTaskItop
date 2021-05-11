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
router.get(
  "/dashboard",
  authController.authorize,
  authController.checkRole,
  userController.getInfo
);
router.get(
  "/users",
  authController.authorize,
  authController.checkRole,
  userController.getAllUsers
);
router.delete(
  "/delete/:id",
  authController.authorize,
  authController.checkRole,
  userController.deleteUser
);
router.get("/users/:id", userController.getCurrentUser);
router.patch("/users/:id/update/:id", userController.updateUser);

module.exports = router;
