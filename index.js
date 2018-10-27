var express=require('express');
var todocontroller=require('./controllers/todocontroller');

var index=express();

//set template engine
index.set('view engine','ejs');

//static files
index.use(express.static('./public'));

//fire controller
todocontroller(index);

//listen to port
index.listen(3000);
console.log('server started');