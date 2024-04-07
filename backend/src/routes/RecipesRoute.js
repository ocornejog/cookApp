const express = require("express");
const router = express.Router();
const recipeCtrl = require('../controllers/RecipesController');

router.route("/recipes").get(recipeCtrl.getRecipes);

router.route("/create").post(recipeCtrl.createRecipe);

router.route("/recipe/:recipeID").get(recipeCtrl.getSpecificRecipe);

router.route("/searchByTags/:searchString").get(recipeCtrl.searchingTags);

router.route("/advancedSearch").post(recipeCtrl.advancedSearching);

router.route("/recipesByTag/:tag").get(recipeCtrl.getRecipesByTag);

module.exports = router;