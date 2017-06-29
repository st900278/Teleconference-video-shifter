var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + "/build/"));

app.get('/', function (req, res) {
    res.render("index.html");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
