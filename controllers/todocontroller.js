var bodyparser= require('body-parser');
var data=[{item:'sleep'},{item:'eat'},{item:'code'},{item:'repeat'}];

var urlencoded=bodyparser.urlencoded({extended:false});

module.exports=function(index){
	
	index.get('/todo',function(req,res){
		res.render('todo',{d:data});
	});
	
	index.post('/todo',urlencoded,function(req,res){
		data.push(req.body);
		res.json(data);
	});
	
	index.delete('/todo',function(req,res){
		
	});
	
};