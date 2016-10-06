var express = require('express'),
    bodyParser = require('body-parser');
    
require('./api/model.js')();  

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.use('/api/v1', require('./api/api.js')());

app.use(express.static('./'));

app.listen('3000', function(){
    console.log('Listening in the port 3000');
}); 