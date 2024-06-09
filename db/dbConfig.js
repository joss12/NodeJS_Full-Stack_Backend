require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/userModels");

const connect = async () => {
  await mongoose
    .connect(process.env.mongo)
    .then(() => {
      console.log("->Database  Successfully Connected");
    })
    .catch((err) => {
      console.log("->Database Connection Failed", err.stack);
    });
};

const disconnect = async () => {
  await mongoose.connection.close();
};

const findUser = async (obj) => {
  User.findOne(obj);
};

const saveUser = async (newUser) => {
  return await newUser.Save();
};

module.exports = {
  connect,
  disconnect,
  findUser,
  saveUser,
};
