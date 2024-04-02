const mongoose = require("mongoose");
const Comment = require('../models/CommentsModel');

const commentCtrl = {};

commentCtrl.getComments = async (req, res) => {
    const foundComments = await Comment.find();
    res.json(foundComments);
};

commentCtrl.createComment = async (req, res) => {
    const _id = new mongoose.Types.ObjectId;
    const { user_id, recipe_id, comment, raiting, date_of_publication } = req.body;

    const newComment = new Comment({
        _id,
        user_id,
        recipe_id,
        comment,
        raiting,
        date_of_publication
    });
    await newComment.save()
    .then(() => {
        res.json('Comment created')
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
};

commentCtrl.getRecipeComments = async (req, res) => {
    const foundRecipeComments = await Comment.find({ "recipe_id": req.params.recipeID });
    res.json(foundRecipeComments);
};

module.exports = commentCtrl;