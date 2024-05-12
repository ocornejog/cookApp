const express = require("express");
const router = express.Router();
const recipeCtrl = require("../controllers/RecipesController");
const auth = require("../middleware/auth");

router.route("/recipes").get(auth, recipeCtrl.getRecipes);

router.route("/create").post(auth, recipeCtrl.createRecipe);

router.route("/recipe/:recipeID").get(auth, recipeCtrl.getSpecificRecipe);

router.route("/searchByTags/:searchString").get(auth, recipeCtrl.searchingTags);

router.route("/updateRecipe").put(auth, recipeCtrl.updateRecipe);

router.route("/delete").post(auth, recipeCtrl.deleteRecipe);

router.route("/advancedSearch").post(auth, recipeCtrl.advancedSearching);

router.route("/recipesByTag/:tag").get(auth, recipeCtrl.getRecipesByTag);

module.exports = router;
