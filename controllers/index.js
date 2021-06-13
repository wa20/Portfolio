const router = require("express").Router();
const htmlRoutes = require("./routes");



router.use("/", htmlRoutes);



module.exports = router;