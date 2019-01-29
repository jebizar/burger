var orm = require('../config/orm');

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        })
    },

    insertOne: function(burgerName, cb){
        orm.insertOne(burgerName,function(res){
            cb(res);
        })
    },

    updateOne: function(burgerName, cb){
        orm.updateOne(burgerName, function(res){
            cb(res);
        })
    }
};

module.exports = burger;