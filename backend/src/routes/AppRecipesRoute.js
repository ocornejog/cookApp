const express = require("express");
const router = express.Router();
const appRecipeCtrl = require('../controllers/AppRecipesController');

router.route("/appRecipes").get(appRecipeCtrl.getAppRecipes);

router.route("/addAppRecipe").post(appRecipeCtrl.addRecipeUser);

router.route("/getRecipeUser/:userID").get(appRecipeCtrl.getAppRecipesUser);

router.route("/getAppRecipeID/:recipeID").get(appRecipeCtrl.getAppRecipeID);

router.route("/deleteRecipe").post(appRecipeCtrl.deleteRecipe);

module.exports = router;