const mongoose = require("mongoose");
const AppRecipe = require('../models/AppRecipesModel');

const appRecipeCtrl = {};

appRecipeCtrl.getAppRecipes = async (req, res) => {
    const foundAppRecipes = await AppRecipe.find();
    res.json(foundAppRecipes);
};

module.exports = appRecipeCtrl;