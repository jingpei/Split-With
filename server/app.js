var express = require('express');
// var mongoose = require('mongoose');
// var favicon = require('serve-favicon');

var app = express();

app.set('port', (process.env.PORT || 8000));

var fs = require('fs');
var https = require('https');
// var privateKey = fs.readFileSync(__dirname + '/server.key');
// var certificate = fs.readFileSync(__dirname + '/server.cert');

// var credentials = {key: privateKey, cert: certificate};

// var db = process.env.MONGOLAB_URI || 'mongodb://localhost/vcp';
// mongoose.connect(db);

// routing handled in middleware
require('./config/middleware.js')(app, express);

// serve favicon
// app.use(favicon(__dirname + '/../client/assets/favicon.ico'));

//Did not get Heroku working with https
// var httpsServer = https.createServer(credentials, app);
app.listen(app.get('port'));
console.log('Listening to port ' + app.get('port'));

module.exports = app;
