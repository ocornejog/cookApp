const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require('../models/UsersModel');
const jwt = require('jsonwebtoken');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const { _id } = req.body;
  if (_id) {
    const foundUser = await User.findOne({ _id: _id });
    res.json(foundUser);
  } else {
    const users = await User.find();
    res.json(users);
  }
};

userCtrl.createUser = async (req, res) => {
  const _id = new mongoose.Types.ObjectId();

  const { name, lastname, birthdate, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.json("Email exist");
  }


  const newUser = new User({
    _id,
    name,
    lastname,
    birthdate,
    email,
    password: hash,
  });
  await newUser
    .save()
    .then(() => {
      res.json("User created");
    })
    .catch((err) => console.log(err));
};

userCtrl.verifyUser = async (req, res) => {
  const foundUser = await User.findOne({ 'email': req.params.email });
  if (foundUser !== null) {
    const myPassword = req.body.password;
    if (bcrypt.compareSync(myPassword, foundUser.password)) {
      const token = jwt.sign(
        { userId: foundUser._id }, 
        process.env.TOKEN_KEY,
        { expiresIn: '24h' }
      );
      res.json({
        user: foundUser, 
        token: token
      });
    } else {
      res.json("incorrect password");
    }
  } else {
    res.json("user does not exist");
  }

};

userCtrl.findByEmail = async (req, res) => {
  const foundUser = await User.findOne({ email: req.params.email });
  res.json(foundUser);
};

userCtrl.findById = async (req, res) => {
  const foundUser = await User.findOne({ _id: req.params.id });
  res.json(foundUser);
};

userCtrl.updateUser = async (req, res) => {
  const { _id, name, lastName, birthDate, photo } = req.body;
  await User.findByIdAndUpdate(
    _id,
    {
      name: name,
      lastname: lastName,
      birthdate: birthDate,
      photo: photo
    }
  ).then(() => {
    res.json("User updated");
  }).catch((err) => {
    console.log(err);
  });
};

userCtrl.updatePass = async (req, res) => {
  const { _id, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  await User.findByIdAndUpdate(_id, { 
    password: hash 
  })
  .then(() => {
    res.json("User updated");
  })
  .catch((err) => console.log(err));
};

module.exports = userCtrl;