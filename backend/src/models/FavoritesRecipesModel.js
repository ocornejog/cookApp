const { Schema, model } = require('mongoose');

const favoritesRecipesSchema = new Schema({
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

const FavoriteRecipe = model('FavoriteRecipe', favoritesRecipesSchema); 

module.exports = FavoriteRecipe;