var express = require('express');
var app = express();
var port = process.env.PORT || 56789;
var router = express.Router();

router.route('/home').get(function(req, res){
	console.log('You are at home...');
	res.send('Welcome home...');
});

router.route('/home/:param').get(function(req, res) {
	var who = req.params.param;
	console.log(who + ' is at home...');
	res.send({ 
		who : who,
		where : "home"
	});
});

app.use('/', router);
app.listen(port, function(){
	console.log('Trial server has started at: ' + port);
})