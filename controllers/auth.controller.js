const { findUser, saveUser } = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const User = require("../models/userModels");
const mongoose = require("mongoose");
const authController = {
  async Register(req, res, next) {
    await findUser({ email: req.body.email })
      .then((user) => {
        // check if the user exist
        if (user) {
          res.status(409).json({
            message:
              "This User already exist, try to logging in or register with another user email",
          });
        } else {
          const user = new User();
          user._id = new mongoose.Types.ObjectId();
          const newUser = Object.assign(user, req.body);
          bcrypt.hash(newUser.password, 10, (err, hash) => {
            if (err) {
              return es.status(501).json({ message: "Error:" + err.message });
            } else {
              newUser.password = hash;
              saveUser(newUser)
                .then((user) => {
                  return res.status(201).json({
                    message: "Successful Registration",
                    user: user,
                  })
                })
                .catch((err) => {
                  error: {
                    message: err.message;
                  }
                });
            }
          });
        }
      })
      .catch((err) => {
        error: {
          message: err.message;
        }
      });
  },
  async Login(req, res, next) {},
};

module.exports = authController;
