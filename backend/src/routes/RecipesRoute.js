const express = require("express");
const router = express.Router();
const recipeCtrl = require("../controllers/RecipesController");
const auth = require("../middleware/auth");

router.route("/recipes").get(recipeCtrl.getRecipes);

router.route("/create").post(recipeCtrl.createRecipe);

router.route("/recipe/:recipeID").get(auth, recipeCtrl.getSpecificRecipe);

router.route("/searchByTags/:searchString").get(recipeCtrl.searchingTags);

router.route("/updateRecipe").put(recipeCtrl.updateRecipe);

router.route("/delete").post(recipeCtrl.deleteRecipe);

router.route("/advancedSearch").post(recipeCtrl.advancedSearching);

router.route("/recipesByTag/:tag").get(recipeCtrl.getRecipesByTag);

module.exports = router;
