const User = require("../models/userModel");

const getHomePage = (req, res) => {
  res.render("index");
};

const getCreateUserPage = (req, res) => {
  res.render("create-user");
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email: email, password: password });
    const savedUser = await user.save();
    console.log("User Is In: ", savedUser);
    res.redirect("/");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCreateUserPage: getCreateUserPage,
  createUser: createUser,
};
