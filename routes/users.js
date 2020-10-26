var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/suasv', function(req, res, next) {
  res.render('suasv',{title:"Sua sinh vien"})
});

module.exports = router;
