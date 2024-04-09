const express = require("express");
const router = express.Router();
const appRecipeCtrl = require('../controllers/AppRecipesController');

router.route("/appRecipes").get(appRecipeCtrl.getAppRecipes);

router.route("/addAppRecipe").post(appRecipeCtrl.addRecipeUser);

router.route("/getRecipeUser/:userID").get(appRecipeCtrl.getAppRecipesUser);

module.exports = router;