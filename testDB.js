var DB = require('./db').Database;
var db = new DB('localhost', '27017', 'storyx');
var Promise = require('bluebird');
db.connect();

db.addUser('abc')
    .then( function(){ return db.addUser('bcd'); })
    .then( function(){ console.log('done');});
