const express = require("express");
const router = express.Router();
const appRecipeCtrl = require('../controllers/AppRecipesController');
const auth = require("../middleware/auth");

router.route("/appRecipes").get(auth, appRecipeCtrl.getAppRecipes);

router.route("/addAppRecipe").post(auth, appRecipeCtrl.addRecipeUser);

router.route("/getRecipeUser/:userID").get(auth, appRecipeCtrl.getAppRecipesUser);

router.route("/getAppRecipeID/:recipeID").get(auth, appRecipeCtrl.getAppRecipeID);

router.route("/deleteRecipe").post(auth, appRecipeCtrl.deleteRecipe);

module.exports = router;