const router = require("express").Router();

//dashboard
router.get("/", async (req, res) => {
  
  res.render("dashboard");
});

module.exports = router;