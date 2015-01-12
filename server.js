var express = require('express');
var app = express();
var appRoutes = require('./server/routes');

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/bower', express.static(__dirname + '/bower_components'));
app.use('/views', express.static(__dirname + '/client/views'));

// It is VVIMP to register all your routes after the static registration. Espeicially for ng Application you always want your index page to render and then client 
// side to take over routing - basic SPA concept. So you need to catch all routes and send the index.html to client. If you happen to have route registeraion with 
// catch all before the static components then requests to any of that static componenet will get served by index.html instead of actual static file.

app.get('/*', appRoutes.index);

app.listen(3000, function() {
	console.log('yay! i am listening now');
});