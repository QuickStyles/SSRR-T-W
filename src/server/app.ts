import * as express from 'express';
import * as path from 'path';
// import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import root from './routes/root';

import { ErrorRequestHandler, RequestHandler } from 'express-serve-static-core';

const app = express();

// view engine setup
app.set('views', path.join('public/views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', root)

interface ExpressError extends Error {
  status? : number;
}
// catch 404 and forward to error handler
app.use(<RequestHandler> function(req, res, next) {
  const err: ExpressError = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(<ErrorRequestHandler>function(err, req, res, next) {
    console.log(err)
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(<ErrorRequestHandler> function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

module.exports = app;
