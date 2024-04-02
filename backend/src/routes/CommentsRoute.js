const express = require("express");
const router = express.Router();
const commentCtrl = require('../controllers/CommentsController');

router.route("/comments").get(commentCtrl.getComments);

router.route("/create").post(commentCtrl.createComment);

router.route("/recipe/:recipeID").get(commentCtrl.getRecipeComments);

module.exports = router;