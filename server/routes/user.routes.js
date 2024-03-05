const router = require("express").Router();
const userController = require("../controllers/user.controller.js");
router.post("/", userController.addUser);
router.delete("/:id",userController.deleteUser);
router.put("/:id",userController.updateUser)
module.exports = router;
