const express=require('express')
const yosay=require('yosay');
const app=express();
app.use(express.static('public'));
app.get('/about',function(req,res){
	console.log(__dirname)
	res.sendFile(__dirname+'/index.html');
})
app.listen(3000,function(){
	console.log('example app listening on port 3000')
})