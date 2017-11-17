let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);

§app.use(express.static(path.join(__dirname+'/dist')));

app.get('/', function(req, res, next){
   res.sendFile(path.join(__dirname+"/index.html"));
});

app.get('/index.html', function(req, res,next){
    res.sendFile(path.join(__dirname+"/dist/index.html"));
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
