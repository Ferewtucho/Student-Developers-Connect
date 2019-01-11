//fetch creat proofiles//location//bio//expreiances .....
//anything that has to do with autonication will be here
const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");

//Load User Model
const User = require("../../models/User");

// @route  GET api/profile/test
// @des    Test Profile routes
// @access Public rote
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route  GET api/profile
// @des    Get current users profile
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.nonprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }

        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;