var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*
    Requires
 */
var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
console.log(path.join(__dirname, 'public', 'favicon.ico').toString());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
    Uses
 */
app.use('/', index);


app.get('/teste', function(req, res){
    console.log('OK2');
    res.send('ok');
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log('OK2');
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    console.log('OK3');
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);

    // render the error page
    if(err.status == 404){
      res.render('404', {
          title: '404 - Page not Found'});
    }
    else {
      res.render('error');
    }

});

app.get('/report/:chart_id/:user_id', function (req, res) {
    //authenticate user_id, get chart_id obfuscated url
    //send image binary with correct headers
});


module.exports = app;
