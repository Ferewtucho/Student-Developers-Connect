//fetch creat proofiles//location//bio//expreiances .....
//anything that has to do with autonication will be here
const express = require("express");
const router = express.Router();

// @route  GET api/profile/test
// @des    Test Profile routes
// @access Public rote

router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;