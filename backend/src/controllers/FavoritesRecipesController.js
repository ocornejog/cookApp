const mongoose = require("mongoose");
const FavoriteRecipe = require('../models/FavoritesRecipesModel');

const favoriteRecipeCtrl = {};

favoriteRecipeCtrl.getFavoritesRecipes = async (req, res) => {
    const foundFavoritesRecipes = await FavoriteRecipe.find();
    res.json(foundFavoritesRecipes);
};

module.exports = favoriteRecipeCtrl;