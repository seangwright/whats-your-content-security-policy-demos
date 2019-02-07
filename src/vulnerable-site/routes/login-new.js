const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('login-new', {
    title: 'Login New'
  });
});

module.exports = router;