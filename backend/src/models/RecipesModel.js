const { Schema, model } = require('mongoose');

const recipesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    type_of_cuisine: {
        type: Number,
        default: 0
    },
    type_of_dishes: {
        type: Number,
        default: 0
    },
    specific_regime: {
        type: Number,
        default: 0
    },
    preparation_time: {
        type: Number,
        default: 0
    },
    culinary_skill_level: {
        type: Number,
        default: 0
    },
    nutritional_value: {
        type: [Boolean]
    },
    preparation_steps: {
        type: [String],
        default: []
    },
    photo: {
        type: String,
        trim: true,
        default: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/AABEIACsAQAMBIgACEQEDEQH/xABgAAACAwEBAAAAAAAAAAAAAAADBAECBQAHEAACAgICAwADAAAAAAAAAAAAAQIDEZIhUxMxchIjggEBAQEAAAAAAAAAAAAAAAAAAAIBEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A9dpsuxH9095D1dl3ZPaQlSuIjsSSGo2Wdk9pBVZZ2T2kBQVGKF8lnZPaR3ks7J7SKokCHZZ2T2kDcrOye0i7KP3H6KgxqvUR2AhU+IjkWSk4gqF4sKmAYkHknIUlg37j9FmCzz/RsGDU+Ij1cjJqbxEerbMQ0IsMmJxbCxbDTWSfyA5ZOWBdsE5cx+irbAtvMfqIH//Z"
    },
    ingredients: {
        type: [String],
        default: []
    },
    quantity_ingredients: {
        type: [String],
        default: []
    },
    tags: {
        type: [String], 
        default: []
    }
});

const Recipe = model('Recipe', recipesSchema); 

module.exports = Recipe;