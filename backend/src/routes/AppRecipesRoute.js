const express = require("express");
const router = express.Router();
const appRecipeCtrl = require('../controllers/AppRecipesController');

router.route("/appRecipes").get(appRecipeCtrl.getAppRecipes);

module.exports = router;