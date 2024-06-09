const { findUser, saveUser } = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const User = require("../models/userModels");
const mongoose = require("mongoose");
const errorTemplate = require("../templates/errorTemplate");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authController = {
  //Register
  async Register(req, res, next) {
    try {
      const user = await findUser({ email: req.body.email });
      // check if the user exist
      if (user) {
        throw new Error(
          "This User already exist, try to logging in or register with another user email"
        );
      } else {
        //Create new user,
        //User need an ID(user._id = new mongoose.Types.ObjectID())
        const user = new User();
        user._id = new mongoose.Types.ObjectId();
        const newUser = Object.assign(user, req.body);

        //Hashing the password
        const hash = await bcrypt.hash(newUser.password, 10);
        newUser.password = hash;
        const savedUser = await saveUser(newUser);
        return res.status(201).json({
          message: "Successful Registration",
          result: savedUser,
        });
      }
    } catch (e) {
      return errorTemplate(res, e, e.message);
    }
  },

  //Login
  async Login(req, res, next) {
    try {
      const loggedUser = await findUser({ email: req.body.email });

      if (!loggedUser) {
        throw new Error("Authentication Failed: User email not found");
      } else {
        const result = await bcrypt.compare(
          req.body.password,
          loggedUser.password
        );
        if (result) {
          loggedUser.password = null;
          // Create a JSON Web Token
          const token = jwt.sign({ user: loggedUser }, process.env.JWT_SECRET);
          return res.status(201).json({
            user: loggedUser,
            token: true,
            token: token,
            message: "Login Successful",
          });
        } else {
          throw new Error(
            "Authentication Failed: Email or password does not match"
          );
        }
      }
    } catch (e) {
      return errorTemplate(res, e, e.message);
    }
  },
};

module.exports = authController;
