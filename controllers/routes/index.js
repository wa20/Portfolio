const router = require("express").Router();

const homepageRoute = require("./homepage");
const dashboardRoute = require("./dashboard");

//routes
router.use("/", homepageRoute);
router.use("/dashboard", dashboardRoute);


module.exports = router