const mongoose = require("mongoose");
const Recipe = require('../models/RecipesModel');

const recipeCtrl = {};

async function searchRecipes(searchString) {
    try {
        const results = await Recipe.find({ tags: { $regex: searchString, $options: 'i' } }, 
        { "type_of_cuisine": false, "type_of_dishes": false, "specific_regime": false, "preparation_time": false, 
        "culinary_skill_level": false, "nutritional_value": false, "preparation_steps": false, "ingredients": false,
        "quantity_ingredients": false, "tags": false });
        return results;
    } catch (error) {
        return { error: error.message };
    }
}

recipeCtrl.getRecipes = async (req, res) => {
    const foundRecipes = await Recipe.find();
    res.json(foundRecipes);
};

recipeCtrl.getSpecificRecipe = async (req, res) => {
    const foundRecipe = await Recipe.find({ '_id': req.params.recipeID }, { "description": false, "type_of_cuisine": false, 
    "type_of_dishes": false, "specific_regime": false, "preparation_time": false, "culinary_skill_level": false, 
    "nutritional_value": false, "tags": false });
    res.json(foundRecipe);
};

recipeCtrl.createRecipe = async (req, res) => {
    const _id = new mongoose.Types.ObjectId;
    const { name, description, type_of_cuisine, type_of_dishes, specific_regime, preparation_time, culinary_skill_level, 
    nutritional_value, preparation_steps, photo, ingredients, quantity_ingredients, tags } = req.body;

    const newRecipe = new Recipe({
        _id,
        name,
        description, 
        type_of_cuisine, 
        type_of_dishes, 
        specific_regime, 
        preparation_time, 
        culinary_skill_level, 
        nutritional_value, 
        preparation_steps, 
        photo, 
        ingredients, 
        quantity_ingredients, 
        tags
    });
    await newRecipe.save()
    .then(() => {
        res.json('Recipe created')
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
};

recipeCtrl.searchingTags = async (req, res) => {

    const searchString = req.params.searchString;

    searchRecipes(searchString)
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        })
    });
};

module.exports = recipeCtrl;