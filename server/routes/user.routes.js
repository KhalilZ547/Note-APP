const router = require("express").Router();
const userController = require("../controllers/user.controller.js");

router.get("/", userController.selectU);
router.post("/signup", userController.signup);
router.post("/login",userController.login)
router.delete("/:id",userController.deleteUser);
router.put("/:id",userController.updateUser)
module.exports = router;
