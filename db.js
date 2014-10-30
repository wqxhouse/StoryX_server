function Database(addr, port, dbname, user, pass) {
    /* public fields */
    this.user = user;
    this.pass = pass;
    this.addr = addr;
    this.port = port;
    this.dbname = dbname;
}

Database.prototype = (function() {
    /* private fields */
    var Promise = require('bluebird');
    var Mongo = require('mongoskin');
    var db; // database instance

    return {
        constructor: Database, 

        connect: function() {
            var auth = '';
            if(this.user !== undefined || this.pass !== undefined) {
                auth = this.user + ':' + this.pass + '@'; 
            }

            var conn =  'mongodb://' + auth
                           +this.addr+':'+this.port+'/'+this.dbname;
            db = Mongo.db(conn, {native_parser:true});  

            db.bind('story');
            db.bind('user');
        },

        addUser: function( deviceToken ) {
            var insertAsync = 
                Promise.promisify(db.user.insert, db.user);
            return insertAsync({ deviceToken:deviceToken });
        }
    };
}());

exports.Database = Database;