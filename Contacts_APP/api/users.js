var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    _id :{
        type : Number
    },
    Name : {
        type : String
    },
    PhoneNumber : {
        type : Number
    },
    Sex : {
        type : String
    },
    Address : {
        Street : {
            type : String
        },
        City : {
            type : String
        },
        Pincode : {
          type : Number  
        }
    }
});

module.exports = mongoose.model('Users', usersSchema);
