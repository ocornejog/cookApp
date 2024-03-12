const mongoose = require("mongoose");
const Recipe = require('../models/FavoritesRecipesModel');

const recipeCtrl = {};

recipeCtrl.getRecipes = async (req, res) => {
    const foundRecipes = await Recipe.find();
    res.json(foundRecipes);
};

module.exports = recipeCtrl;