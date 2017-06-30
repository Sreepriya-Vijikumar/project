const express = require('express')
const app = express()

//app.get('/', function (req, res) {
  //res.send('Hello World!')
//})
//app.get("/:number",function (req,res){
//	var num = req.params.number;
//	if(num%2==0)
  //     res.send("even")
    //else
    //	res.send("odd")
//})

//	res.send("in priya page"+req.params.name)
//})
app.get('/about',function(req,res){
console.log(__dirname)
res.sendFile(__dirname+'/index.html');

})

app.listen(3000,function(){
	console.log('the example is in port')
})

