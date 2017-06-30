const express=require('express')
const app=express();
var Database =require('nedb')
var db=new Database({filename:'store.db',autoload:true})


app.set('view engine','ejs');
app.get('/login',function(req,res){
	db.find({},function(err,result){
		console.log(result)
		res.render('index',{res:result})

	})
})
app.listen(3000,function(){
	console.log('example app listening on port 3000');
})

