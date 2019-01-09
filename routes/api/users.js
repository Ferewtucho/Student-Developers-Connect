//anything that has to do with autonication will be here
const express = require("express");
const router = express.Router();

// @route  GET api/users/test
// @des    Test Users routes
// @access Public rote

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;