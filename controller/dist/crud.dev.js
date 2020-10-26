"use strict";

var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demords'
});

exports.themsv = function (req, res) {
  var _req$body = req.body,
      ho = _req$body.ho,
      ten = _req$body.ten,
      lop = _req$body.lop,
      email = _req$body.email;
  db.query("SELECT email FROM sinhvien where email=?", {
    email: email
  }, function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result.length > 0) {
      return res.render('fthem', {
        message: 'Email da ton tai'
      });
    } else {
      db.query("insert into sinhvien set ?", {
        ho: ho,
        ten: ten,
        lop: lop,
        email: email
      }, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          return res.render('fthem', {
            message: 'Them thanh cong'
          });
        }
      });
    }
  });
};

exports.getAll = function (req, res) {
  db.query("select * from sinhvien", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};

exports.suasv = function (req, res) {
  var id = req.parmas.id;
  db.query("select * from sinhvien where massv=?", {
    id: id
  }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      return res.render('suasv', {
        title: "Sua sinh vien",
        result: result
      });
    }
  });
};