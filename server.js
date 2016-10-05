var express = require('express');
var app = express();

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/templates', express.static(__dirname + '/templates'));
app.use('/lib', express.static(__dirname + '/lib'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen('3000', function (){
  console.log('Now is listening the port 3000');
});
