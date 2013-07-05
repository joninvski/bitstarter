var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var buffer = fs.readFileSync('index.html')
    response.send("Buffer" + buffer);
    response.send('Hello World2!here');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
