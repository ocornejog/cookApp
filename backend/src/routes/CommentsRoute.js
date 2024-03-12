const express = require("express");
const router = express.Router();
const commentCtrl = require('../controllers/CommentsController');

router.route("/comments").get(commentCtrl.getComments);

module.exports = router;