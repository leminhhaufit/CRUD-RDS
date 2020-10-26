"use strict";

var express = require('express');

var router = express.Router();

var apicontroller = require('../controller/crud');

var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demords'
});
/* GET home page. */

router.get('/', function (req, res, next) {
  db.query("select * from sinhvien", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Get ALL',
        result: result
      });
      console.log(result[0].massv);
    }
  });
});
router.get('/suasv/:id', apicontroller.suasv);
router.get('/suasv/', function (req, res) {
  res.render('suasv', {
    title: 'Sua sinh vien'
  });
});
router.get('/themsv', function (req, res) {
  res.render('fthem', {
    title: 'Them sinh vien'
  });
});
router.post('/themsv', apicontroller.themsv); //router.get("/",apicontroller.getAll)

module.exports = router;