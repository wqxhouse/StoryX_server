var express = require('express');
var app = express();
var port = process.env.PORT || 12345

var router = express.Router();

router.route('/')
	.get(function(req, res, next) {
	    res.send('hello world');
	});

router.route("/:str")
	.get(function(req, res) {
		console.log("in " + req.params.str);
		res.send({ hello : "wenqin" });
	});

app.use('/', router);
app.listen(port, function(){
    console.log('server started at port: ' + port);
});
