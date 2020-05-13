const router = require("express").Router();
const googleController = require("../../controllers/google-controller");

router.route("/").get(googleController.findAll);

module.exports = router;
