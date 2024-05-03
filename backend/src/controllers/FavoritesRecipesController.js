const mongoose = require("mongoose");
const FavoriteRecipe = require('../models/FavoritesRecipesModel');

const favoriteRecipeCtrl = {};

favoriteRecipeCtrl.getFavoritesRecipes = async (req, res) => {
    const foundFavoritesRecipes = await FavoriteRecipe.find();
    res.json(foundFavoritesRecipes);
};

favoriteRecipeCtrl.createFavoriteRecipe = async (req, res) => {
    const _id = new mongoose.Types.ObjectId;
    const { userID, recipeID } = req.body;

    const newFavoriteRecipe = new FavoriteRecipe({
        _id,
        user_id: userID,
        recipe_id: recipeID
    });
    await newFavoriteRecipe.save()
    .then(() => {
        res.json('Favorite recipe created')
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
};

favoriteRecipeCtrl.checkUserFavoriteRecipe = async (req, res) => {
    const userFavoriteRecipe = await FavoriteRecipe.find({ 'user_id': req.params.userID, 'recipe_id': req.params.recipeID });
    res.json(userFavoriteRecipe);
};

favoriteRecipeCtrl.deleteRecipeFavorites = async(req, res) => {
    await FavoriteRecipe.deleteMany({ 'recipe_id': req.params.recipeID })
    .then(result=>{
        res.status(200).json({
            message:"Recipe favorites deleted successfully",
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
};

favoriteRecipeCtrl.deleteFromFavorites = async(req, res) => {
    await FavoriteRecipe.deleteMany({ 'user_id': req.params.userID, 'recipe_id': req.params.recipeID })
    .then(result=>{
        res.status(200).json({
            message:"Favorite recipe deleted successfully",
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
};


favoriteRecipeCtrl.getUserFavoritesRecipes = async (req, res) => {
    const userFavoritesRecipes = await FavoriteRecipe.find({ 'user_id': req.params.userID });
    res.json(userFavoritesRecipes);
};

module.exports = favoriteRecipeCtrl;