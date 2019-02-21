const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login-old', {
        title: 'Login Old'
    });
});

router.post('/', function (req, res, next) {
    res.render('login-old', {
        title: 'Login Old',
        loggedIn: true
    });
});

module.exports = router;