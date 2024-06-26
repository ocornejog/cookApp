const express = require("express");
const router = express.Router();
const User = require("../models/UsersModel");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const userCtrl = require('../controllers/UsersController');
const auth = require("../middleware/auth");

router.route("/users").get(userCtrl.getUsers);

router.route("/create").post(userCtrl.createUser);

router.route("/:email").get(userCtrl.findByEmail);

router.route("/userID/:id").get(userCtrl.findById);

router.route("/update").put(auth, userCtrl.updateUser);

router.route("/password").put(userCtrl.updatePass);

router.route("/loginUser/:email").post(userCtrl.verifyUser);

module.exports = router;