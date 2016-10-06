var express = require('express'),
    status = require('http-status'),
    body = require('body-parser'),
    Users = require('./users');    
    
 
module.exports = function() {

    var api = express.Router();
    
    api.route('/users')
        .get(function(req, res){
            Users.find({}, function(err, data){
                if(err) {
                    return res.
                            status(status.INTERNAL_SERVER_ERROR).
                            json({ err : err.toString()});
                }
                if(!data) {
                    return res.
                            status(status.NOT_FOUND).
                            json({ err : 'Not fond'});
                }
                
                var json = {};
                json['users'] = data;
                res.json(json);
        });
    });
    
    api.post('/users', function(req, res){
        var user = new Users(req.body);
        user.save(function(error){
            if(error){
                console.log(error);
                res.error();
            }
            else {
                res.end();
            }
        });
    });
        
    api.route('/user/:id')
        .get(function(req, res){
            Users.find({ '_id' : req.params.id }, function(err, data){
                if(err) {
                    return res.
                            status(status.INTERNAL_SERVER_ERROR).
                            json({ err : err.toString()});
                }
                if(!data) {
                    return res.
                            status(status.NOT_FOUND).
                            json({ err : 'Not fond'});
                }
                
                var json = {};
                json['user'] = data;
                res.json(data);
        });
    });
    
        
  return api;   
};
