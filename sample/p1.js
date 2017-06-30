console.log("sree");
var fs=require('fs');
var contents=fs.readFileSync('p1.txt');
console.log(contents.toString());
console.log('hii');
function addition(arg1,arg2,arg3,arg4) {
	console.log(arg4);
}
addition(1,2,3,4);

//var fs=require('fs');
fs.readFile('p1.txt',function(err,docs){console.log(docs.toString())})
console.log('hi');