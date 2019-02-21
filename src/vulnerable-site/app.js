const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const nocache = require('nocache');
const csp = require('helmet-csp');

const indexRouter = require('./routes/index');
const loginNewRouter = require('./routes/login-new');
const loginOldRouter = require('./routes/login-old');
const commentModerationRouter = require('./routes/comment-moderation');

const reportCspRouter = require('./routes/report-csp');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(nocache());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(bodyParser.json({
  type: ['json', 'application/csp-report']
}))
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(csp({
  directives: {
    defaultSrc: ["'self'"],
    reportUri: '/report-csp'
  },
  reportOnly: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login-new', loginNewRouter);
app.use('/login-old', loginOldRouter);
app.use('/comment-moderation', commentModerationRouter);
app.use('/report-csp', reportCspRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;