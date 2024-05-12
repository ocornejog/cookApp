const express = require("express");
const router = express.Router();
const commentCtrl = require('../controllers/CommentsController');
const auth = require("../middleware/auth");

router.route("/comments").get(auth, commentCtrl.getComments);

router.route("/create").post(auth, commentCtrl.createComment);

router.route("/recipe/:recipeID").get(auth, commentCtrl.getRecipeComments);

module.exports = router;