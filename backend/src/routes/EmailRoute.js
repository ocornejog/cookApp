const express = require("express");
const router = express.Router();

const {sendEmail} = require('../controllers/EmailController');

router.route('/sendMail').post(sendEmail);

module.exports = router;