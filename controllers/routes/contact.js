const router = require("express").Router();

//dashboard
router.get("/", async (req, res) => {
  
  res.render("contact");
});

module.exports = router;