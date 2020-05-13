const router = require("express").Router();
const bookRoute = require("./book");
const googleRoute = require("./googleBook");

router.use("/book", bookRoute);

router.use("/googleBook", googleRoute);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
