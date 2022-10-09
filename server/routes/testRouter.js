const Router = require("express");
const router = new Router();
const testController = require("../controllers/testController");

router.get("/", testController.getAll);
router.post("/", testController.create);

module.exports = router;
