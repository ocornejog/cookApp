const mongoose = require("mongoose");
const Comment = require('../models/CommentsModel');

const commentCtrl = {};

commentCtrl.getComments = async (req, res) => {
    const foundComments = await Comment.find();
    res.json(foundComments);
};

module.exports = commentCtrl;