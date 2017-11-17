let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);

app.use(express.static(path.join('/dist')));

app.get('/', function(req, res, next){
   res.sendFile(path.join("/index.html"));
});

app.get('/index.html', function(req, res,next){
    res.sendFile(path.join("/dist/index.html"));
});

var webapp = app.listen(process.env.PORT || 8080, function () {
    var port = webapp.address().port;
    console.log("App now running on port", port);
  });
