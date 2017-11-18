let express = require('express');
var app = express();
let server = require('http').Server(app);
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'dist/')));
console.log("path******************: ", path.join(__dirname, 'dist/'));


app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/index.html');
});

//app.get('*', function (req, res) {
//  const index = path.join(__dirname,'../dist/index.html');
//  res.sendFile(index);
//});

app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'));
})

//var webapp = app.listen(process.env.PORT || 8080, function () {
 //   var port = webapp.address().port;
 //   console.log("App now running on port", port);
 // });
