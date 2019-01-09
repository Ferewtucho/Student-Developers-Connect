//users can alos post comment and post
//anything that has to do with autonication will be here
const express = require("express");
const router = express.Router();

// @route  GET api/post/test
// @des    Test POST routes
// @access Public rote

router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

module.exports = router;