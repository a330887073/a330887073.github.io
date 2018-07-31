var express = require('express');//123
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var fs = require("fs");

app.use(express.static('public'));

app.post('/set', function (req, res) {
	console.log(req.body.data)
	fs.writeFile('server.js', req.body.data,function(err){
	});
});

app.get('/get', function (req, res) {
  fs.readFile('server.js','utf-8',function (err, data) {
	  
	res.send(data);
  })
});

app.get('/test', function (req, res) {
  res.send("测试成功3")
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
