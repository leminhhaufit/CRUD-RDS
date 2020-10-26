const mysql = require('mysql');


const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'demords'
})

exports.themsv=(req,res)=>{
    const {ho,ten,lop,email} = req.body;
    db.query("SELECT email FROM sinhvien where email=?",[email],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            return res.render('fthem',{
                message: 'Email da ton tai'
            })
        }else{
            db.query("insert into sinhvien set ?",{ho:ho,ten:ten,lop:lop,email:email},(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    return res.render('fthem',{
                        message: 'Them thanh cong'
                    });
                }
            })
        }
        
    })
}
exports.getAll=(req,res)=>{
    db.query("select * from sinhvien",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    })
}
exports.fsuasv=(req,res)=>{
    
    const ma= req.params.id;
    db.query("select * from sinhvien where massv=?",[ma],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            return res.render('fsuasv',{
                title:"Sua sinh vien",
                result:result   
            })
        }
    })
    
}
exports.suasv = (req,res)=>{
    let data=req.body;
    
    
    
    let sql = 'update sinhvien set ? where massv='+data.massv;
            db.query(sql,[data],(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.redirect('/');
                }
            })
       
        
   
}
exports.xoasv = (req,res)=>{
    console.log(req.params.id);
    db.query("delete from sinhvien where massv=?",req.params.id,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }

    })
}
exports.timbyten = (req,res)=>{
    const data = [
        '%'+req.query.tim+'%'
    ];
    
    
    db.query("select * from sinhvien where ten like N?",[data],(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result[0]);
            res.render('index', { 
                title: 'Get ALL' ,
                
                result: result
              });
        }
    })
}
/*
let data=req.body;
    const id = req.params.id;
    let sql = 'update sinhvien set ? where massv='+id;
            db.query(sql,data,(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    return res.render('fsuasv',{
                        message: 'Sua thanh cong'
                    });
                }
            })

            if(err){
                    console.log(err);
                }else{
                    console.log(result);
                    return res.render('fsuasv',{
                        message: 'Sua thanh cong'
                    });
                }
                
*/
