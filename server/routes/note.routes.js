const router = require('express').Router();
const noteController = require("../controllers/note.controller");

router.get("/:id", noteController.select);
router.post("/:id",noteController.add)
router.delete("/:id",noteController.deleteOne)
router.put("/:id",noteController.updateOne)




module.exports = router;
