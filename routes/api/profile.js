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

// @route  POST api/profile
// @des    Create or Edit users profile
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Get fields
    const profileFields = {};

    profileFields.user = req.user.id;

    if (req.body.handle) profileFields.handle = req.body.handle;

    if (req.body.company) profileFields.company = req.body.company;

    if (req.body.website) profileFields.website = req.body.website;

    if (req.body.location) profileFields.location = req.body.location;

    if (req.body.bio) profileFields.bio = req.body.bio;

    if (req.body.status) profileFieldybody.status = req.body.status;

    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;

    //Skills - Split into array
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    //Social
    profileFields.social = {};

    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;

    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;

    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;

    if (req.body.linkdin) profileFields.social.linkdin = req.body.linkdin;

    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check to see if the handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;