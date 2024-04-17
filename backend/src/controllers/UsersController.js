const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/UsersModel");

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

userCtrl.findByEmail = async (req, res) => {
  const foundUser = await User.findOne({ email: req.params.email });
  res.json(foundUser);
};

userCtrl.findById = async (req, res) => {
  const foundUser = await User.findOne({ _id: req.params.id });
  res.json(foundUser);
};

userCtrl.updateUser = async (req, res) => {
  const { _id, name, lastName, birthDate } = req.body;
  const updatedUser = await User.updateOne(
    { _id: _id },
    {
      $set: {
        name: name,
        lastname: lastName,
        birthdate: birthDate,
      },
    }
  );
  res.json("User updated");
};

userCtrl.updatePass = async (req, res) => {
  const { _id, password } = req.body;
  const updatedUser = await User.updateOne(
    { _id: _id },
    {
      $set: {
        password: password,
      },
    }
  );
  res.json("User updated");
};

module.exports = userCtrl;
