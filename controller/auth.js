const mysql = require("mysql2");
const connection = require("../config/db");
const jwt = require("jsonwebtoken");

const KEY = "asdf12";

const userLogin = (req, res) => {
  const { email, password } = req.body;

  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    const userData = results.find(
      (item) => email === item.email && password === item.password
    );

    userData
      ? res.json({
          message: "sucsses login",
          token: jwt.sign({ id: userData.id, email: userData.email }, KEY),
        })
      : res.status(401).json({
          message: "email or password are incorrect",
        });
  });
};

const userRegister = (req, res) => {
    res.json({
      message: "sucsses register",
    });
  }

module.exports = {
    userLogin,
    userRegister
}