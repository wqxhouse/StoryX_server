var express = require('express');
var app = express();
var port = process.env.PORT || 8080
app.use('/', function(req, res){
    console.log('entered');
    res.send('hello world');
});

app.listen(port, function(){
    console.log('server started at port: ' + port);
});
