const express = require("express");
const router = express.Router();
const favoriteRecipeCtrl = require('../controllers/FavoritesRecipesController');
const auth = require("../middleware/auth");

router.route("/favoritesRecipes").get(auth, favoriteRecipeCtrl.getFavoritesRecipes);

router.route("/create").post(auth, favoriteRecipeCtrl.createFavoriteRecipe);

router.route("/checkFavoriteRecipe/user/:userID/recipe/:recipeID").get(auth, favoriteRecipeCtrl.checkUserFavoriteRecipe);

router.route("/deleteFromFavorites/user/:userID/recipe/:recipeID").delete(auth, favoriteRecipeCtrl.deleteFromFavorites);

router.route("/deleteRecipeFavorites/recipe/:recipeID").delete(auth, favoriteRecipeCtrl.deleteRecipeFavorites);

router.route("/favoritesRecipes/user/:userID").get(auth, favoriteRecipeCtrl.getUserFavoritesRecipes);


module.exports = router;