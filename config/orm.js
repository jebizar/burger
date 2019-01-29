var connection = require('./connection');

var orm = {
    selectAll: function(cb){
        var queryString = 'select * from burgers';
        connection.query(queryString, function(err, res){
            if(err) throw err;
            console.log(cb(res));
            cb(res);
        })
    },

    insertOne: function(burgerName, cb) {
        var queryString = 'insert into burgers(burger_name) values ("?")';
        connection.query(queryString, [burgerName], function(err, res){
            if(err) throw err;
            console.log(cb(res));
            cb(res);
        })
    },

    updateOne: function(burgerName, cb){
        var queryString = 'update burgers set devoured = true where ?';
        connection.query(queryString,[burgerName], function(err,res){
            if(err) throw err;
            console.log(cb(res));
            cb(res);
        })
    }
};

module.exports = orm;

