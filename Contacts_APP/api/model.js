var mongoose = require('mongoose');

module.exports = function(){
  mongoose.connect('mongodb://localhost:27017/Users');
  
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
        console.log('Conntected To Mongo Database');
  });

  var Users = mongoose.model('Users', require('./users'),'users');
  
  var models = {
    Users : Users
  };

  return models;
};
