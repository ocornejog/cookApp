const express = require("express");
const router = express.Router();
const recipeCtrl = require('../controllers/RecipesController');

router.route("/recipes").get(recipeCtrl.getRecipes);

module.exports = router;