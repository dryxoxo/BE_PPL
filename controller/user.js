const mysql = require('mysql2');
const connection = require('../config/db')

const getUsers = (req, res) => {
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
          res.send({
            message: "sucsses get data",
            data: results
          })
        }
      );
}

const getId = (req, res) => {
  const query = req.params['id']
  connection.query(
    'SELECT * FROM `users` WHERE id_user = "'+query+'"',
    function(err, results, fields) {
      res.send({
        message: "sucsses get data",
        data: results
      })
    }
  )
}

const addUser = (req, res) => {

  let data = {
    email: req.body.email,
    password: req.body.password
  }
  connection.query(
    'INSERT INTO users SET ?', data, 
    function(err, results, fields) {
      res.send({
        message: "sucsses get data",
        data: results
      })
    }
  )
}

module.exports = {getUsers, getId, addUser}