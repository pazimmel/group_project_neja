//SERVER SIDE APP.JS


var express = require('express');
var app = express();
var path = require('path');
var employee = require('./employee');


app.set('port', (process.env.PORT || 5000));

app.get('/employee', function(request, response, next){
    response.send(employee());
});

app.get('/*', function(request,response){
    var file = request.params[0] || "views/index.html";
    response.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"));