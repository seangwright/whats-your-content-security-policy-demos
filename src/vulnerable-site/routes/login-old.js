const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login-old', {
        title: 'Login Old'
    });
});

module.exports = router;