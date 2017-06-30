const express=require('express')
const app=express()
app.get('/:name',function(req,res){
	res.send("in the page about"+req.params.name)
})
app.listen(3000,function(){
	console.log("example is in the port 3000")
})