const express = require("express");
const router = express.Router();
const favoriteRecipeCtrl = require('../controllers/FavoritesRecipesController');

router.route("/favoritesRecipes").get(favoriteRecipeCtrl.getFavoritesRecipes);

router.route("/create").post(favoriteRecipeCtrl.createFavoriteRecipe);

router.route("/checkFavoriteRecipe/user/:userID/recipe/:recipeID").get(favoriteRecipeCtrl.checkUserFavoriteRecipe);

router.route("/deleteFromFavorites/user/:userID/recipe/:recipeID").delete(favoriteRecipeCtrl.deleteFromFavorites);

module.exports = router;