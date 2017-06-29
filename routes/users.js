var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/*options*/);
const dbconnect = {
  host: 'localhost',
  port: 20893,
  database: 'rtda',
  user: 'rtdasu',
  password: '3tdqZZ;c:UnvQJ9c'
};
// const dbconnect = "postgres://rtdasu:3tdqZZ;c:UnvQJ9c@localhost:20893/rtda";
var db = pgp(dbconnect)
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.any('SELECT * FROM users')
    .then(function(data) {
      res.render('users', { title: 'Users', data: data });
      //console.log('Data:', data);
    })
    .catch(function(error) {
      console.log('ERROR:', error);
    });

});

module.exports = router;
