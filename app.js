let express = require('express');
var app = express();
let server = require('http').Server(app);

var path = require('path');
var rootPath = path.normalize(__dirname + '/');
app.use(express.static(rootPath + '/dist'));


app.get('*', function (req, res) {
  const index = path.join(__dirname,'..dist', 'index.html');
  res.sendFile(index);
});

var webapp = app.listen(process.env.PORT || 8080, function () {
    var port = webapp.address().port;
    console.log("App now running on port", port);
  });
