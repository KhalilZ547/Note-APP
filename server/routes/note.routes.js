const router = require('express').Router();
const noteController = require("../controllers/note.controller");



router.get("/", noteController.select);
router.post("/",noteController.add)
router.delete("/:id",noteController.deleteOne)
router.put("/:id",noteController.updateOne)




module.exports = router;
