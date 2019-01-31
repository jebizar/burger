var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');


router.get('/index', function(req, res){
    burger.selectAll(function(data){
        var object = {
            burgers: data
        };
        res.render('index', object);
    });
});

router.post('/api/burgers/', function(req,res){
    burger.insertOne(req.body.burger_name, function(res){
        res.render('index', { burgers: data });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    var id = req.params.id;
  
    burger.updateOne(id, function(res) {
        res.render('index', { burgers: data });
    });
  });

  module.exports = router;