const mongoose = require("mongoose");
const AppRecipe = require('../models/AppRecipesModel');

const appRecipeCtrl = {};

appRecipeCtrl.getAppRecipes = async (req, res) => {
    const foundAppRecipes = await AppRecipe.find();
    res.json(foundAppRecipes);
};

appRecipeCtrl.addRecipeUser = async (req, res) => {
  const _id = new mongoose.Types.ObjectId;
  const {user_id, recipe_id} = req.body;
  const addedRecipe = new AppRecipe ({
    _id:_id,
    user_id:user_id,
    recipe_id:recipe_id
  });
  await addedRecipe.save()
    .then(() => {
        res.json('Recipe added');
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    });
};

appRecipeCtrl.getAppRecipesUser = async (req, res) => {
  console.log(req.params.userID);
  const foundRecipeUser = await AppRecipe.find({"user_id":req.params.userID});
  res.json(foundRecipeUser);
};

module.exports = appRecipeCtrl;