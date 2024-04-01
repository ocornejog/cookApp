const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require('../models/UsersModel');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const foundUsers = await User.find();
    res.json(foundUsers);
};

userCtrl.createUser = async (req, res) => {
    const _id = new mongoose.Types.ObjectId;
    
    const { name, lastname, birthdate, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    
    const newUser = new User({
        _id,
        name,
        lastname,
        birthdate,
        email,
        password: hash,
    });
    await newUser.save().catch(err => console.log(err));
    res.json('User created')
};

userCtrl.findByEmail = async (req, res) => {
    const foundUser = await User.findOne({ 'email': req.params.email });
    res.json(foundUser);
};

userCtrl.findById = async (req, res) => {
    const foundUser = await User.findOne({ '_id': req.params.id });
    res.json(foundUser);
};

module.exports = userCtrl;