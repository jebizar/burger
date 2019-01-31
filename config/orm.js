var connection = require('./connection.js');

var orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, res){
            if(err) throw err;
            cb(res);
            
        });
    },
    insertOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(queryString, [table, col, val], function(err, res){
            if(err) throw err;
            cb(res);
            
        });
    },
    updateOne: function (table, col, val, id,cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE id= ?";
        connection.query(queryString, [table, col, val,id], function(err, res){
            if(err) throw err;
            cb(res);
            
        });
    }
};

module.exports = orm;

