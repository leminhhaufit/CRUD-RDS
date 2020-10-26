var express = require('express');
var router = express.Router();
const apicontroller= require('../controller/crud');
const mysql = require('mysql');

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'demords'
})
/* GET home page. */
router.get('/', function(req, res, next) {
  
  db.query("select * from sinhvien",(err,result)=>{
    if(err){
        console.log(err);
    }else{
     
        res.render('index', { 
          title: 'Get ALL' ,
          
          result: result
        });
      
        console.log(result[0].massv);
    }
})
});
router.get('/suasv/:id',apicontroller.fsuasv)

router.get('/themsv',function(req,res){
  res.render('fthem',{title:'Them sinh vien'});
})
router.get('/timsv',apicontroller.timbyten)
router.post('/themsv',apicontroller.themsv)
router.post('/suasv',apicontroller.suasv)
router.get('/xoasv/:id',apicontroller.xoasv)
//router.get("/",apicontroller.getAll)

module.exports = router;
