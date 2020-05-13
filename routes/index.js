const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

//if no route sent to react app
router.use((req, res) => {
  res.sendFile(path.join(_dirname, "../client/public/index.html"));
});

module.exports = router;
