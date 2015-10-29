//SERVER SIDE APP.JS

//generate employee with type and skill number
// //generate the type  X
//generate the skill number X
//put it together in an employee object X
//server side app.js sends employee object to client side app.js



var express = require('express');
var app = express();
var path = require('path');
var employee = require('./employee');


app.set('port', (process.env.PORT || 5000));
console.log(employee());
app.get('/employee', function(request, response, next){
    response.send(employee());
});

app.get('/*', function(request,response){
    var file = request.params[0] || "views/index.html";
    response.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"));