const { Schema, model } = require('mongoose');

const appRecipesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user_id: {
        type: String,
        required: true
    },
    recipe_id: {
        type: String,
        required: true
    }
});

const AppRecipe = model('AppRecipe', appRecipesSchema); 

module.exports = AppRecipe;