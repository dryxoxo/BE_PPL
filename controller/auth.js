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
  let data = {
    email: req.body.email,
    password: req.body.password,
  };

  data.email == "" || data.password == ""
    ? res.send([
        {
          message: "email or password must be filled",
        },
      ])
    : connection.query(
        "INSERT INTO users SET ?",
        data,
        function (err, results, fields) {
          res.send({
            message: "sucsses get data",
            data: results,
          });
        }
      );
};

module.exports = {
  userLogin,
  userRegister,
};
