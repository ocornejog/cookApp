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

async function searchRecipes2(type_of_cuisine, type_of_dishes, specific_regime, preparation_time, culinary_skill_level, 
    nutritional_value) {

    let filter = {};
    if(type_of_cuisine !== 0){
        filter.type_of_cuisine = type_of_cuisine;
    }
    if(type_of_dishes !== 0){
        filter.type_of_dishes = type_of_dishes;
    }
    if(specific_regime !== 0){
        filter.specific_regime = specific_regime;
    }
    if(preparation_time !== 0){
        filter.preparation_time = preparation_time;
    }
    if(culinary_skill_level !== 0){
        filter.culinary_skill_level = culinary_skill_level;
    }
    if (nutritional_value.includes(true)) {
        const booleanConditions = nutritional_value.map((value, index) => {
            if (value) {
                return { [`nutritional_value.${index}`]: true };
            }
            return undefined;
        }).filter(condition => condition !== undefined);
    
        if (booleanConditions.length > 0) {
            filter.$and = booleanConditions;
        }
    }

    try {
        const results = await Recipe.find(filter, 
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
    const foundRecipe = await Recipe.find({ '_id': req.params.recipeID }, {"tags": false });
    res.json(foundRecipe);
};

recipeCtrl.getRecipesByTag = async (req, res) => {
    try {
        const recipes = await Recipe.find({ tags: req.params.tag });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
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
        res.json(_id)
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

recipeCtrl.updateRecipe = async (req, res) => {
  const {_id, name, description, type_of_cuisine, type_of_dishes, specific_regime, preparation_time, culinary_skill_level, 
    nutritional_value, preparation_steps, photo, ingredients, quantity_ingredients, tags } = req.body;
  const updateRecipe = await Recipe.findByIdAndUpdate(
    _id, 
  {
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
  }).then(() => {
    res.json('Recipe updated');
  }).catch((err) => {
    console.log(err);
  });
}

recipeCtrl.deleteRecipe = async(req,res) => {
  const id = req.body;
  const deleteRecipe = await Recipe.findOneAndDelete({'_id':id});
  res.json('Recipe Deleted');
}

recipeCtrl.advancedSearching = async (req, res) => {

    const { type_of_cuisine, type_of_dishes, specific_regime, preparation_time, culinary_skill_level, nutritional_value } = req.body;

    searchRecipes2(type_of_cuisine, type_of_dishes, specific_regime, preparation_time, culinary_skill_level, nutritional_value)
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