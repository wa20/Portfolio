const router = require("express").Router();

//dashboard
router.get("/dashboard", async (req, res) => {
  
  res.render("dashboard");
});

module.exports = router;