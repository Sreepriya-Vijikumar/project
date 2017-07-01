const express=require('express')
const app=express();
app.use(express.static('connect'));

//var Database =require('nedb')
//var db=new Database({filename:'store.db',autoload:true})


app.set('view engine','ejs');
app.set('port',process.env.PORT||5000) //1

app.get('/',function(req,res){
	console.log(__dirname)
	res.sendFile(__dirname+'/connect/con1.html');
})
app.get('/login',function(req,res){
	console.log(__dirname)
	res.sendFile(__dirname+'/connect/login.html');
})
app.get('/signup',function(req,res){
	console.log(__dirname)
	res.sendFile(__dirname+'/connect/signup.html');
})
app.get('/loginSubmit',function(req,res){
	//var email=req.query.email;
	//var password=req.query.password;
    var userEmail=req.query.email;
    var userPassword=req.query.password;


    var person={
    	email:userEmail,
    	password:userPassword
    }


    db.find(person,function(err,result){

    	if(result.length>0){


db.find({},function(err,result){
	console.log(result);
	res.render('index',{res:result})
})
    	
    	}
    	else{
    		res.send('login is failed')
    	}
    	
    	/*if(result.length>0){
    		res.send('login is successful');

    	}
    	else{
    		res.send('logi failed');

    	}*/
    })


 /*   db.insert(person,function(err,result){
    	console.log(result);
    	res.send('success inserted');
    })*/
})
app.get('/signupSubmit',function(req,res){
	var Uname=req.query.name;
	var Uemail=req.query.email;
	var USname=req.query.username;
	var Upassword=req.query.password;

	var person1={
		name:Uname,
		email:Uemail,
		username:USname,
		password:Upassword
	}
	db.insert(person1,function(err,result){
		console.log(result);
		res.send('registered');
	})
})



/*	if(email=="sree@gmail.com"&&password=="123"){
		res.send("login success");
	}
	else
	{
		res.send("login failed");
	}
})*/


app.get('/test',function(req,res){


	res.render('index',{name:"sreepriya"})
})
app.get('/home',function(req,res){
	db.find({},function(err,result){
		console.log(result)
		res.render('index',{res:result})

	})
})
//app.listen(3000,function(){
app.listen(app.get('port'),function(){ //2
	console.log('example app listening on port 3000');
})