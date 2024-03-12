const { Schema, model } = require('mongoose');

const commentsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user_id: {
        type: String,
        required: true
    },
    recipe_id: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        default: ''
    },
    raiting: {
        type: Number,
        default: 0
    },
    date_of_publication: {
        type: String,
        default: (new Date(Date.now()).toDateString()).toString()
    }
});

const Comment = model('Comment', commentsSchema); 

module.exports = Comment;