const express = require("express");
const router = express.Router();
const favoriteRecipeCtrl = require('../controllers/FavoritesRecipesController');

router.route("/favoritesRecipes").get(favoriteRecipeCtrl.getFavoritesRecipes);

module.exports = router;