const express = require("express");
const router = express.Router();
const User = require("../models/UsersModel");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const userCtrl = require('../controllers/UsersController');

router.route("/users").get(userCtrl.getUsers);

router.route("/create").post(userCtrl.createUser);

router.route("/:email").get(userCtrl.findByEmail);

module.exports = router;