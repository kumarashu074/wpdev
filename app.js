let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);

app.use(express.static(path.join('/dist')));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);
});

var webapp = app.listen(process.env.PORT || 8080, function () {
    var port = webapp.address().port;
    console.log("App now running on port", port);
  });
