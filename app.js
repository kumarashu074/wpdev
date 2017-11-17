let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res, next){
   res.sendFile(path.join(__dirname+"/index.html"));
});

app.get('/index.html', function(req, res,next){
    res.sendFile(path.join(__dirname+"/dist/index.html"));
});

server.listen(process.env.PORT || 8000', function() {
    console.log("App is running");
});
