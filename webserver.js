var express = require('express'),
    routes = require('./routes'),
    jade = require('jade'),
    http = require('http');

var app = module.exports = express();

app.set('port', 10000);
app.set('views', __dirname + '/ui/app')
////app.set("view options", {layout: false});
app.engine('html', require('ejs').renderFile);
app.engine('jade', require('jade').__express);

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname +  "/ui/app"))
app.use(app.router);
//
if (app.get("env") == "development") {
    app.use(express.errorHandler())
//    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
}

if (app.get("env") == "production") {
//    app.use(express.errorHandler())
}
//
//
app.get('/', routes.index);
app.get('/test', routes.test);
app.get('/part', routes.part);
//
////app.listen(10000)
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});